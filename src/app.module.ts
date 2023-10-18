import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FilmsModule } from './films/films.module';
import { AuthMiddleware } from './auth/auth.middleware';
// import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  imports: [UsersModule, AuthModule, FilmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('/films');
  }
}
