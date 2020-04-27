import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { GenresService } from './genres.service';
import { ParseObjectIdPipe } from 'src/common/parse-objectid.pipe';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Controller('genres')
export class GenresController {
  constructor(private genresService: GenresService) {}

  @Get()
  async getAll() {
    return this.genresService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', ParseObjectIdPipe) genreId: string) {
    return this.genresService.getById(genreId);
  }

  @Post()
  async create(@Body() createGenreDto: CreateGenreDto) {
    return this.genresService.create(createGenreDto);
  }

  @Patch('/:id')
  async update(
    @Param('id', ParseObjectIdPipe) genreId: string,
    updateGenreDto: UpdateGenreDto,
  ) {
    return this.genresService.update(genreId, updateGenreDto);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseObjectIdPipe) genreId: string) {
    return this.genresService.delete(genreId);
  }
}
