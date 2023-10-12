import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { UserDto } from './dto';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/enum/role.enum';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  private readonly users = [
    {
      userId: '1',
      username: 'john',
      password: 'changeme',
    },
    {
      userId: '2',
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | null> {
    return this.prismaService.user.findFirst({
      where: {
        username,
      },
    });
  }

  async createUser(userData: UserDto): Promise<User> {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltOrRounds);
    console.log(hashedPassword + 'HASHED PASSWORD');
    const user = await this.prismaService.user.create({
      data: {
        username: userData.username,
        hash: hashedPassword,
        role: Role.User,
      },
    });
    return user;
  }
}
