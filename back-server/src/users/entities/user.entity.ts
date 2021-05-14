import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum Gender {
  Male = 'M',
  Female = 'F',
  Other = 'X',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 20 })
  password: string;

  @Column()
  tel: number;

  @Column({ type: 'enum', enum: Gender })
  gender: Gender;
}
