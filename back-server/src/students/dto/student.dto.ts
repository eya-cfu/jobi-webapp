import {
  IsDate,
  IsNotEmpty,
  IsString,
  MaxLength,
  IsBoolean,
  IsUrl,
  IsInt,
} from 'class-validator';

export class StudentDto {
  @IsInt()
  id: number;

  @IsNotEmpty()
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

  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  languages: string;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  @IsUrl()
  linkedin: string;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  location: string;
}
