import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryColumn()
  id: number;

  @Column({
    length: 100
})
  name: string;

  @Column({
    length: 150
})
  address: string;

  @Column({
    length: 100
})
  website : string;

  @Column()
  tel: number;

  @Column({
    length: 100
})
  email: string;

  @Column({
    length: 50
})
  logo: string ; 
}