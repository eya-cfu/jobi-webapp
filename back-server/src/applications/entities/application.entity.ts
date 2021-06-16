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

export enum Status {
  accepted = 'accepted',
  refused = 'refused',
  processing = 'processing',
}

@Entity()
export class Application {
  @PrimaryGeneratedColumn()
  appID: number;

  @ManyToOne(() => Student, {
    nullable: false,
    eager: true,
    orphanedRowAction: 'delete',
  })
  @JoinColumn()
  student: number;

  @OneToOne(() => Offer, { nullable: false, eager: true })
  @JoinColumn()
  offer: number;

  @Column()
  appDate: string;

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
