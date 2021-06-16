import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  MaxLength,
} from 'class-validator';

export class UserLoginDto {
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(50)
  readonly email: string;

  @IsNotEmpty()
  @MaxLength(20)
  @IsAlphanumeric()
  readonly password: string;
}
