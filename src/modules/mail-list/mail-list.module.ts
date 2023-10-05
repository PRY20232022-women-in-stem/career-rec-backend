import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailListController } from './mail-list.controller';
import { MailListService } from './mail-list.service';
import { MailList } from './entities/mail-list.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MailList])
  ],
  controllers: [MailListController],
  providers: [MailListService]
})
export class MailListModule { }
