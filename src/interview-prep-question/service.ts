import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InterviewPrepQuestion } from './entity';

@Injectable()
export class InterviewPrepQuestionService {
  constructor(
    @InjectRepository(InterviewPrepQuestion)
    private interviewPrepQuestionRepository: Repository<InterviewPrepQuestion>,
  ) {}

  async updateInterviewPrepQuestion(
    interviewPrepQuestionData: Partial<InterviewPrepQuestion>,
  ): Promise<InterviewPrepQuestion> {
    const interviewPrepQuestion =
      await this.interviewPrepQuestionRepository.findOneBy({
        id: interviewPrepQuestionData.id,
      });
    if (!interviewPrepQuestion) {
      throw new Error('InterviewPrepQuestion not found');
    }
    interviewPrepQuestion.answer = interviewPrepQuestionData.answer;

    return await this.interviewPrepQuestionRepository.save(
      interviewPrepQuestion,
    );
  }
}
