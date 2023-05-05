import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOption = {
    origin: ['http://127.0.0.1:5500']
  }
  app.enableCors(corsOption);
  await app.listen(3000);
}
bootstrap();
