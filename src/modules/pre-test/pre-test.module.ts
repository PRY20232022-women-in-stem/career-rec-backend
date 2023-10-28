import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreTestController } from './pre-test.controller';
import { PreTestService } from './pre-test.service';
import { PreTest } from './entities/pre-test.entity';
import { StudentModule } from '../student/student.module';
import { PreTestGateway } from './pre-test.gateway';

@Module({
  imports: [
    StudentModule,
    TypeOrmModule.forFeature([PreTest])
  ],
  providers: [PreTestService, PreTestGateway],
  controllers: [PreTestController]
})
export class PreTestModule { }
