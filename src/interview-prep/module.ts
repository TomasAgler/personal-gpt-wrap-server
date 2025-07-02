import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterviewPrep } from './entity';
import { InterviewPrepService } from './service';
import { InterviewPrepController } from './controller';

@Module({
  imports: [TypeOrmModule.forFeature([InterviewPrep])],
  providers: [InterviewPrepService],
  controllers: [InterviewPrepController],
})
export class InterviewPrepModule {}
