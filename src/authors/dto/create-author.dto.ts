import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateAuthorDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  dateOfBirth: Date;

  @IsNotEmpty()
  dateOfDeath: Date;
}
