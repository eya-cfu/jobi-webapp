import { User } from 'src/users/entities/user.entity';
import { Entity, Column, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Student {
  @OneToOne(() => User, {
    primary: true,
    nullable: false,
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: number;

  @Column({ type: 'date' })
  dateOfBirth: string;

  @Column({ default: false })
  driverLicense: boolean;

  @Column({ length: 50 })
  education: string;

  @Column({ length: 100 })
  school: string;

  @Column({ length: 20 })
  languages: string;

  @Column({ length: 100 })
  linkedin: string;

  @Column({ length: 100 })
  location: string;

  @Column({ length: 50, nullable: true })
  picture: string;

  @Column({ length: 50, nullable: true })
  cv: string;
}
