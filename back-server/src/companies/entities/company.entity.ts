import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 150 })
  address: string;

  @Column({ length: 100 })
  website: string;

  @Column()
  tel: number;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 50, nullable: true })
  logo: string;
}
