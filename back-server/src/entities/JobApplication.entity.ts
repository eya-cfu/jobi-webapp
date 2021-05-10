import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { JobOffer } from './JobOffer.entity';
import { Student } from './student.entity';
import {User} from './user.entity'
@Entity()
export class Company {
  @PrimaryColumn()
  appID: number;

  @PrimaryColumn()
    @OneToOne(type => Student)
    @JoinColumn()
    Studentid: Student;

    @OneToOne(type => JobOffer)
    @JoinColumn()
    JobOfferid: JobOffer;

  @Column()
  appDate : Date;

  @Column({
    length: 1000
})
  motivation: string;

  @Column("text")
  status: Status;
 
}

enum Status {
    accepted ='accepted',
    refused='refused',
    processing='processing'
}