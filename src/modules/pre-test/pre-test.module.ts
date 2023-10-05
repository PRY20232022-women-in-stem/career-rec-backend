import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreTestController } from './pre-test.controller';
import { PreTestService } from './pre-test.service';
import { PreTest } from './entities/pre-test.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PreTest])
  ],
  providers: [PreTestService],
  controllers: [PreTestController]
})
export class PreTestModule { }
