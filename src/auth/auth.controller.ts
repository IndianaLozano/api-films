import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  // @Roles(Role.Admin)
  signIn(@Body() loginDto: AuthDto) {
    return this.authService.signIn(loginDto.username, loginDto.password);
  }
}
