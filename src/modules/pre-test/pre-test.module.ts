import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreTestController } from './pre-test.controller';
import { PreTestService } from './pre-test.service';
import { PreTest } from './entities/pre-test.entity';
import { StudentModule } from '../student/student.module';

@Module({
  imports: [
    StudentModule,
    TypeOrmModule.forFeature([PreTest])
  ],
  providers: [PreTestService],
  controllers: [PreTestController]
})
export class PreTestModule { }
