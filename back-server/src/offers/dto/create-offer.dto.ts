import { IsDateString, IsEnum, IsNumber, MaxLength } from 'class-validator';
import { EmpType, Status } from '../entities/offer.entity';

export class CreateOfferDto {
  @MaxLength(100)
  title: string;

  @IsDateString()
  datePosted: string;

  @IsEnum(Status)
  status: Status;

  @IsEnum(EmpType)
  employmentType: EmpType;

  @MaxLength(20)
  category: string;

  @MaxLength(100)
  location: string;

  @MaxLength(50)
  salary: string;

  @MaxLength(700)
  description: string;

  @MaxLength(1500)
  requirements: string;

  @MaxLength(1500)
  responsibilities: string;

  @MaxLength(2500)
  about: string;

  @IsNumber()
  hoursPerWeek: number;

  @MaxLength(100)
  languages: string;

  @IsNumber()
  companyId: number;

  @IsNumber()
  employerId: number;
}
