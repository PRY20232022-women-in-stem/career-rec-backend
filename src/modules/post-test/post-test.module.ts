import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostTestController } from './post-test.controller';
import { PostTestService } from './post-test.service';
import { PostTest } from './entities/post-test.entity';
import { StudentModule } from '../student/student.module';

@Module({
  imports: [
    StudentModule,
    TypeOrmModule.forFeature([PostTest])
  ],
  controllers: [PostTestController],
  providers: [PostTestService]
})
export class PostTestModule { }
