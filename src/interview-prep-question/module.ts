import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterviewPrepQuestion } from './entity';
import { InterviewPrepQuestionService } from './service';
import { InterviewPrepQuestionController } from './controller';

@Module({
  imports: [TypeOrmModule.forFeature([InterviewPrepQuestion])],
  providers: [InterviewPrepQuestionService],
  controllers: [InterviewPrepQuestionController],
})
export class InterviewPrepQuestionModule {}
