import { InterviewPrep } from '../interview-prep/entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('InterviewPrepQuestion')
export class InterviewPrepQuestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column({ nullable: true })
  answer?: string;

  @Column({ nullable: true })
  evaluation?: string;

  @Column({ nullable: true })
  improvementTip?: string;

  @Column({ nullable: true })
  score?: number;

  @ManyToOne(
    () => InterviewPrep,
    (interviewPrep: InterviewPrep) => interviewPrep.questions,
  )
  interviewPrep: InterviewPrep;
}
