import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { ParseObjectIdPipe } from 'src/common/parse-objectid.pipe';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getAll() {
    return this.booksService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', ParseObjectIdPipe) bookId: string) {
    return this.booksService.getById(bookId);
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Patch('/:id')
  async update(
    @Param('id', ParseObjectIdPipe) bookId: string,
    updateBookDto: UpdateBookDto,
  ) {
    return this.booksService.update(bookId, updateBookDto);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseObjectIdPipe) bookId: string) {
    return this.booksService.delete(bookId);
  }
}
