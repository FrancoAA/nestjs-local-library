import {
  IsNotEmpty,
  IsIn,
  IsOptional,
  IsDate,
  IsString,
} from 'class-validator';

export class UpdateBookInstanceDto {
  @IsOptional()
  @IsString()
  book: string;

  @IsOptional()
  @IsString()
  imprint: string;

  @IsOptional()
  @IsIn(['Available', 'Maintenance', 'Loaned', 'Reserved'])
  status: string;

  @IsOptional()
  @IsDate()
  dueBack: Date;
}
