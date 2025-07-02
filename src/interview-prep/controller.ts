import { Body, Controller, Get, Post } from '@nestjs/common';
import { InterviewPrepService } from './service';
import { InterviewPrep } from './entity';

@Controller('interview-prep')
export class InterviewPrepController {
  constructor(private readonly interviewPrepService: InterviewPrepService) {}

  @Get()
  async getInterviewPreps(): Promise<InterviewPrep[]> {
    return await this.interviewPrepService.getInterviewPreps();
  }

  @Post()
  async createInterviewPrep(
    @Body() interviewPrepData: Partial<InterviewPrep>,
  ): Promise<InterviewPrep> {
    if (
      !interviewPrepData.jobPosition ||
      !interviewPrepData.jobRequirements ||
      !interviewPrepData.jobResponsibilities
    ) {
      throw new Error(
        'jobPosition, jobRequirements and jobResponsibilities are required to create an interview prep.',
      );
    }

    return await this.interviewPrepService.createInterviewPrep(
      interviewPrepData,
    );
  }
}
