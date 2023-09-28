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

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/girls-stem-db'),
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
