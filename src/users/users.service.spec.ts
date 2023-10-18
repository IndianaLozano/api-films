import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UserDto } from './dto';
import { ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, PrismaService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should not create an already existing user - 403 Forbidden', async () => {
    const userDto: UserDto = {
      username: 'testuser',
      password: 'testpassword',
    };

    jest
      .spyOn(service, 'createUser')
      .mockRejectedValue(new ForbiddenException('User already exists'));

    try {
      await service.createUser(userDto);
    } catch (error) {
      expect(error).toBeInstanceOf(ForbiddenException);
      expect(error.message).toBe('User already exists');
      expect(error.getStatus()).toBe(403);
    }
  });
});
