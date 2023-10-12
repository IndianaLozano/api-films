import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FilmsModule } from './films/films.module';

@Module({
  imports: [UsersModule, AuthModule, FilmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
