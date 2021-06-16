import { Company } from 'src/companies/entities/company.entity';
import { Employer } from 'src/employers/entities/employer.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum Status {
  OPEN = 'Open',
  CLOSED = 'Closed',
}

export enum EmpType {
  FULLTIME = 'fulltime',
  FLEXIBLE = 'part-time/flexible',
  WEEKEND = 'weekend',
  TEMPORARY = 'temporary',
  HOLIDAYS = 'summer/holidays',
  INTERNSHIP = 'internship',
  GRADUATE = 'graduate',
}

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  offerId: number;

  @Column({
    length: 100,
  })
  title: string;

  @Column()
  datePosted: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.OPEN,
  })
  status: Status;

  @Column({
    type: 'enum',
    enum: EmpType,
  })
  employmentType: EmpType;

  @Column({
    length: 20,
  })
  category: string;

  @Column({
    length: 100,
  })
  location: string;

  @Column({
    length: 50,
  })
  salary: string;

  @Column({
    length: 700,
  })
  description: string;

  @Column({
    length: 1500,
  })
  requirements: string;

  @Column({
    length: 1500,
  })
  responsibilities: string;

  @Column({
    length: 2500,
  })
  about: string;

  @Column()
  hoursPerWeek: number;

  @Column({
    length: 100,
  })
  languages: string;

  @ManyToOne(() => Employer, { nullable: false })
  @JoinColumn({ referencedColumnName: 'user' })
  employer: number;

  @ManyToOne(() => Company, { nullable: false, eager: true })
  @JoinColumn({ referencedColumnName: 'id' })
  company: number;
}
