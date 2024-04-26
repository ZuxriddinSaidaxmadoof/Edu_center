import { UseFilters } from '@nestjs/common/decorators';
import { NestFactory } from '@nestjs/core';
import { MessagePattern, Transport } from '@nestjs/microservices';
import { MicroserviceOptions } from '@nestjs/microservices/interfaces';
import { join } from 'path';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './lib/AllExceptionFilter';

async function bootstrap() {
  
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'auth',
      protoPath: join(__dirname, './proto/user.proto'),
      url: "localhost:7700"
    },
  });
  app.useGlobalFilters(new AllExceptionsFilter())
  app.listen()
}

bootstrap();


