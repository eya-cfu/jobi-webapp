import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import { Gender } from '../entities/user.entity';

export class UserDto {
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @MaxLength(100)
  readonly email: string;

  @MaxLength(20)
  @IsNotEmpty()
  readonly password: string;

  @IsInt()
  @IsNotEmpty()
  readonly tel: number;

  @IsNotEmpty()
  readonly gender: Gender;
}
