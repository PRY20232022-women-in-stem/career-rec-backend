import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VocationalTestController } from './vocational-test.controller';
import { VocationalTestService } from './vocational-test.service';
import { VocationalTest } from './entities/vocational-test.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([VocationalTest])
  ],
  controllers: [VocationalTestController],
  providers: [VocationalTestService]
})
export class VocationalTestModule { }
