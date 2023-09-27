import { Module } from '@nestjs/common';
import { PostTestController } from './post-test.controller';
import { PostTestService } from './post-test.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostTestSchema } from './schemas/post-test.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PostTest', schema: PostTestSchema }
    ])
  ],
  controllers: [PostTestController],
  providers: [PostTestService]
})
export class PostTestModule { }
