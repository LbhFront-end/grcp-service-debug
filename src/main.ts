import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:4500',
      package: 'anhuai.esr.grpc',
      protoPath: [path.join(__dirname, './protos/c_pi.proto')],
    },
  });

  app.listen(() => {
    console.log(`Application is listenning`);
  });
}
bootstrap();
