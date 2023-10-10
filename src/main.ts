import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //
  app.useGlobalPipes(
    new ValidationPipe({
      // Para recibir solamente los campos definidos en los DTOs.
      whitelist: true,
    }),
  );
  const PORT = 3333;
  await app.listen(PORT);
  console.log('Starting application on port: ' + PORT);
}
bootstrap();
