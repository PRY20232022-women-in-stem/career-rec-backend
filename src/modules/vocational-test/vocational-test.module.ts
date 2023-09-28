import { Module } from '@nestjs/common';
import { VocationalTestController } from './vocational-test.controller';
import { VocationalTestService } from './vocational-test.service';

@Module({
  controllers: [VocationalTestController],
  providers: [VocationalTestService]
})
export class VocationalTestModule {}
