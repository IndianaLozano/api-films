import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const result = await bcrypt.compare(pass, user.hash);

    if (result) {
      console.log('Login success');
      const payload = { sub: user.id, username: user.username, role: user.role };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } else {
      console.log('Login failed');
      throw new UnauthorizedException();
    }
  }
}
