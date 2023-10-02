import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './modules/student/student.module';
import { PreTestModule } from './modules/pre-test/pre-test.module';
import { PostTestModule } from './modules/post-test/post-test.module';
import { MailListModule } from './modules/mail-list/mail-list.module';
import { AuthModule } from './modules/auth/auth.module';
import { VocationalTestModule } from './modules/vocational-test/vocational-test.module';
require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}`),
    AuthModule,
    StudentModule,
    VocationalTestModule,
    PreTestModule,
    PostTestModule,
    MailListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
