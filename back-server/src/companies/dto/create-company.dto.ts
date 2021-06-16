import { IsEmail, IsInt, IsUrl, MaxLength } from 'class-validator';

export class CreateCompanyDto {
  @MaxLength(100)
  readonly name: string;

  @MaxLength(150)
  readonly address: string;

  @MaxLength(100)
  @IsUrl()
  readonly website: string;

  @IsInt()
  readonly tel: number;

  @IsEmail()
  @MaxLength(100)
  readonly email: string;
}
