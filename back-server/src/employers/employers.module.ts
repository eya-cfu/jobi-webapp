import { Module } from '@nestjs/common';
import { EmployersService } from './employers.service';
import { EmployersController } from './employers.controller';
import { Employer } from './entities/employer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offer } from 'src/offers/entities/offer.entity';
import { Company } from 'src/companies/entities/company.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employer]),
    TypeOrmModule.forFeature([Offer]),
    TypeOrmModule.forFeature([Company]),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [EmployersController],
  providers: [EmployersService],
})
export class EmployersModule {}
