import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn,PrimaryColumn } from 'typeorm';
import {User} from './user.entity'

@Entity()
export class Student {
    @PrimaryColumn()
    @OneToOne(type => User)
    @JoinColumn()
    User: User;

  @Column()
  dateOfBirth: Date;

  @Column({ default: false })
  driverLicense:boolean;

  @Column({
    length: 50
})
  education: string;

  @Column({
    length: 100
})
  school: string;

  @Column({
    length: 20
})
  languages: string;

  @Column({
    length: 100
})
  linkedin: string;

  @Column({
    length: 100
})
  location: string;

  @Column({
    length: 50
})
  picture: string;

  @Column({
    length: 50
})
  cv: string;
}


