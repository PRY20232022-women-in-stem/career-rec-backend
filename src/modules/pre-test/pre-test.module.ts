import { Module } from '@nestjs/common';
import { PreTestService } from './pre-test.service';
import { PreTestController } from './pre-test.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PreTestSchema } from './schemas/pre-test.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PreTest', schema: PreTestSchema }
    ])
  ],
  providers: [PreTestService],
  controllers: [PreTestController]
})
export class PreTestModule { }
