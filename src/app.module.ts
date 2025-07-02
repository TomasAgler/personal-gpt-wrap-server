import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InterviewPrepModule } from './interview-prep/module';
import { InterviewPrep } from './interview-prep/entity';
import { InterviewPrepQuestion } from './interview-prep-question/entity';
import { InterviewPrepQuestionModule } from './interview-prep-question/module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [InterviewPrep, InterviewPrepQuestion],
      synchronize: false,
    }),
    InterviewPrepModule,
    InterviewPrepQuestionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
