import { Status } from '../entities/application.entity';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  MaxLength,
} from 'class-validator';

export class CreateApplicationDto {
  @IsInt()
  studentId: number;
  @IsInt()
  offerId: number;
  @IsDateString()
  appDate: string;
  @MaxLength(100)
  @IsNotEmpty()
  motivation: string;
  @IsEnum(Status)
  status: Status;
}
