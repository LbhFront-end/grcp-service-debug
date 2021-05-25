import { Module } from '@nestjs/common';
import { PiControll } from './pi.controller';

@Module({
  imports: [],
  controllers: [PiControll],
})
export class PiModule {}
