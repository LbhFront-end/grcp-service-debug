import { Module } from '@nestjs/common';
import { PiModule } from './pi/pi.module';

@Module({
  imports: [PiModule],
  providers: [],
})
export class AppModule { }
