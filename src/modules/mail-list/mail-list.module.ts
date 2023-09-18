import { Module } from '@nestjs/common';
import { MailListController } from './mail-list.controller';
import { MailListService } from './mail-list.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MailListSchema } from './mail-list.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'MailList', schema: MailListSchema }
    ])
  ],
  controllers: [MailListController],
  providers: [MailListService]
})
export class MailListModule { }
