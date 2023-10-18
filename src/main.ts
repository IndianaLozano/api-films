import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // Para recibir solamente los campos definidos en los DTOs.
      whitelist: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('API Films')
    .setDescription('API Films')
    .setVersion('1.0')
    .addTag('films')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-films', app, document);

  await app.listen(PORT);
  console.log('Starting application on port ' + PORT + '...');
}
bootstrap();
