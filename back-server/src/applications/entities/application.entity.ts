import { Offer } from 'src/offers/entities/offer.entity';
import { Student } from 'src/students/entities/student.entity';
import {
  OneToOne,
  JoinColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Entity,
} from 'typeorm';

enum Status {
  accepted = 'accepted',
  refused = 'refused',
  processing = 'processing',
}

@Entity()
export class Application {
  @PrimaryGeneratedColumn()
  appID: number;

  @ManyToOne(() => Student, { nullable: false })
  @JoinColumn()
  student: Student;

  @OneToOne(() => Offer, { nullable: false })
  @JoinColumn()
  offer: Offer;

  @Column()
  appDate: Date;

  @Column({
    length: 1000,
  })
  motivation: string;

  @Column({
    type: 'enum',
    enum: Status,
  })
  status: Status;
}
