import { IsInt } from 'class-validator';

export class CreateEmployerDto {
  @IsInt()
  readonly userId: number;

  @IsInt()
  readonly companyId: number;
}
