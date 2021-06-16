import { Company } from 'src/companies/entities/company.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Employer {
  @OneToOne(() => User, {
    primary: true,
    nullable: false,
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: number;

  @OneToOne(() => Company, { nullable: false, eager: true })
  @JoinColumn()
  company: number;
}
