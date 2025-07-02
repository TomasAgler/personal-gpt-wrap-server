import { Body, Controller, Put } from '@nestjs/common';
import { InterviewPrepQuestionService } from './service';
import { InterviewPrepQuestion } from './entity';

@Controller('interview-prep-question')
export class InterviewPrepQuestionController {
  constructor(
    private readonly interviewPrepQuestionService: InterviewPrepQuestionService,
  ) {}

  @Put()
  async updateInterviewPrepQuestion(
    @Body() interviewPrepQuestionData: Partial<InterviewPrepQuestion>,
  ): Promise<InterviewPrepQuestion> {
    if (!interviewPrepQuestionData.id) {
      throw new Error('InterviewPrepQuestion ID is required for update');
    }

    if (!interviewPrepQuestionData.answer) {
      throw new Error('InterviewPrepQuestion answer is required for update');
    }

    return await this.interviewPrepQuestionService.updateInterviewPrepQuestion(
      interviewPrepQuestionData,
    );
  }
}
