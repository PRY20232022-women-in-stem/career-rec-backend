import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AuthModule } from './modules/auth/auth.module';
import { StudentModule } from './modules/student/student.module';
import { VocationalTestModule } from './modules/vocational-test/vocational-test.module';
import { PreTestModule } from './modules/pre-test/pre-test.module';
import { PostTestModule } from './modules/post-test/post-test.module';
import { MailListModule } from './modules/mail-list/mail-list.module';
import { Student } from './modules/student/entities/student.entity';
import { VocationalTest } from './modules/vocational-test/entities/vocational-test.entity';
import { PreTest } from './modules/pre-test/entities/pre-test.entity';
import { PostTest } from './modules/post-test/entities/post-test.entity';
import { MailList } from './modules/mail-list/entities/mail-list.entity';
require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Student, VocationalTest, PreTest, PostTest, MailList],
      synchronize: false,
      namingStrategy: new SnakeNamingStrategy()
    }),
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
