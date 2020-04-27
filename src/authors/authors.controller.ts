import {
  Controller,
  Inject,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  Body,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { ParseObjectIdPipe } from 'src/common/parse-objectid.pipe';

@Controller('authors')
export class AuthorsController {
  constructor(private authorsService: AuthorsService) {}

  @Get()
  async getAll() {
    return this.authorsService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', ParseObjectIdPipe) authorId: string) {
    return this.authorsService.getById(authorId);
  }

  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto);
  }

  @Patch('/:id')
  async update(
    @Param('id', ParseObjectIdPipe) authorId: string,
    updateAuthorDto: UpdateAuthorDto,
  ) {
    return this.authorsService.update(authorId, updateAuthorDto);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseObjectIdPipe) authorId: string) {
    return this.authorsService.delete(authorId);
  }
}
