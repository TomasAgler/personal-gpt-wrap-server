import { InterviewPrepQuestion } from '../interview-prep-question/entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('InterviewPrep')
export class InterviewPrep {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jobPosition: string;

  @Column()
  jobRequirements: string;

  @Column()
  jobResponsibilities: string;

  @OneToMany(
    () => InterviewPrepQuestion,
    (question: InterviewPrepQuestion) => question.interviewPrep,
  )
  questions: InterviewPrepQuestion[];

  @Column({ nullable: true })
  evaluation?: string;
}
