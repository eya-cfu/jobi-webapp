import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import {User} from './user.entity' ;
import {Company} from './Company.entity'

@Entity()
export class Employer {
    @PrimaryColumn()
    @OneToOne(type => User)
    @JoinColumn()
    User: User;

    @OneToOne(type => Company)
    @JoinColumn()
    Company: Company;
}