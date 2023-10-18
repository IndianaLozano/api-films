import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import { UserDto } from './dto';
import * as bcrypt from 'bcrypt';
import { Role } from '../enum/role.enum';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  serviceName = this.constructor.name;

  async findOne(username: string): Promise<User | null> {
    return this.prismaService.user.findFirst({
      where: {
        username,
      },
    });
  }

  async createUser(userData: UserDto): Promise<User> {
    try {
      const saltOrRounds = 10;
      const hashedPassword = await bcrypt.hash(userData.password, saltOrRounds);
      console.log(this.serviceName, 'Creating user in DB: ', userData.username);
      const user = await this.prismaService.user.create({
        data: {
          username: userData.username,
          hash: hashedPassword,
          role: Role.User,
        },
      });
      delete user.hash;
      console.log(this.serviceName, 'User created successfully: ', user);
      return user;
    } catch (error) {
      console.log(this.serviceName, 'Error creating user: ', error.message);
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('User already exists');
        }
        throw error;
      }
    }
  }
}
