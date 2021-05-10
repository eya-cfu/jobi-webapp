import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Employer } from './Employer.entity';
import { Company } from './Company.entity'

export enum Status {
    OPEN = 'Open',
    CLOSED = 'Closed'
}

export enum EmpType {
    FULLTIME = 'fulltime',
    PARTIME = 'partime/flexible',
    WEEKEND = 'weekend',
    TEMPORARY = 'temporary',
    HOLIDAYS = 'Summer/holidays',
    INTERNSHIP = 'internship',
    GRADUATE = 'graduate'
}




@Entity()
export class JobOffer {
  @PrimaryColumn()
  OfferId: number;

  @Column({
    length: 100
})
  title: string;

  @Column()
  dataPosted: Date;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.CLOSED
})
Status: Status;

  @Column({
    type: "enum",
    enum: EmpType,
})
  employmentType: EmpType ;

  @Column({
    length: 20
})
  category: String ; 

  @Column({
    length: 100
}) 
  location: string ; 

  @Column({
    length: 50
})
  salary: string ; 

  @Column({
    length: 700
}) 
  description: string ; 

  @Column({
    length: 1500
}) 
  requirements: string ; 

  @Column({
    length: 1500
})
  responsibilities: string ; 

  @Column({
    length: 2500
})
  about: string ; 

  @Column()
  hoursPerWeek: number ; 

  @Column({
    length: 100
}) 
  languages: string ; 

  @OneToOne(type => Employer)
    @JoinColumn()
    Employer: Employer;

    @OneToOne(type => Company)
    @JoinColumn()
    Company: Company;

}

