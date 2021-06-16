import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsBoolean,
  IsUrl,
  IsInt,
  IsDateString,
  IsArray,
} from 'class-validator';

export class CreateStudentDto {
  @IsInt() //required: related user id
  userId: number;

  @IsDateString()
  dateOfBirth: string;

  @IsBoolean()
  driverLicense: boolean;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  education: string;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  school: string;

  @IsArray()
  languages: string[];

  @IsString()
  @MaxLength(100)
  @IsUrl()
  linkedin: string;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  location: string;
}
