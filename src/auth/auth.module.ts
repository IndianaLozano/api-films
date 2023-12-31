import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    UsersModule,
    // Generating JwtModule with global scope, so it can be used in the whole application.
    // The secret option inside register method is used to sign the JWTs.
    // The signOptions option is used to configure the JWT token.
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600s' },
    }),
    PrismaModule,
  ],
  providers: [
    AuthService,
    {
      provide: AuthGuard,
      useClass: AuthGuard,
    },
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
