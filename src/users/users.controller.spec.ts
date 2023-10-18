import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserDto } from './dto';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  describe('signUp', () => {
    it('should create a new user - 200 OK', async () => {
      const userDto: UserDto = {
        username: 'testuser',
        password: 'testpassword',
      };
      const createdUser = { id: 1, ...userDto, hash: 'hashedpassword', role: 'user' };
      jest.spyOn(service, 'createUser').mockResolvedValue(createdUser);

      const result = await controller.signUp(userDto);

      expect(result).toEqual(createdUser);
    });
  });
});
