import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InterviewPrep } from './entity';

@Injectable()
export class InterviewPrepService {
  constructor(
    @InjectRepository(InterviewPrep)
    private interviewPrepRepository: Repository<InterviewPrep>,
  ) {}

  async getInterviewPreps(): Promise<InterviewPrep[]> {
    return await this.interviewPrepRepository.find({
      relations: ['questions'],
      order: {
        id: 'ASC',
      },
    });
  }

  async createInterviewPrep(
    interviewPrepData: Partial<InterviewPrep>,
  ): Promise<InterviewPrep> {
    const interviewPrep =
      this.interviewPrepRepository.create(interviewPrepData);
    return await this.interviewPrepRepository.save(interviewPrep);
  }
}
