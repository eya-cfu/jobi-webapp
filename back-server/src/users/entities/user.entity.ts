import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum Gender {
  Male = 'M',
  Female = 'F',
  Other = 'X',
}

export enum Role {
  Student = 'student',
  Employer = 'employer',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ select: false })
  salt: string;

  @Column({ type: 'enum', enum: Role, default: null })
  role: string;

  @Column()
  tel: number;

  @Column({ type: 'enum', enum: Gender })
  gender: Gender;
}
