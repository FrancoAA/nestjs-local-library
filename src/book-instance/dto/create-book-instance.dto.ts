import {
  IsNotEmpty,
  IsIn,
  IsOptional,
  IsDate,
  IsString,
} from 'class-validator';

export class CreateBookInstanceDto {
  @IsNotEmpty()
  @IsString()
  book: string;

  @IsNotEmpty()
  @IsString()
  imprint: string;

  @IsNotEmpty()
  @IsIn(['Available', 'Maintenance', 'Loaned', 'Reserved'])
  status: string;

  @IsOptional()
  @IsDate()
  dueBack: Date;
}
