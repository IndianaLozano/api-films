import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  controllerName = this.constructor.name;

  @Post('/signup')
  @ApiCreatedResponse({ description: 'The user has been successfully created.' })
  async signUp(@Body() userData: UserDto) {
    console.log(this.controllerName, 'POST sign up user with username ', userData.username);
    return await this.usersService.createUser(userData);
  }
}
