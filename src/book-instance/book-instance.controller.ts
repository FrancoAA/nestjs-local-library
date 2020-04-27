import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { BookInstanceService } from './book-instance.service';
import { CreateBookInstanceDto } from './dto/create-book-instance.dto';
import { UpdateBookInstanceDto } from './dto/update-book-instance.dto';
import { ParseObjectIdPipe } from 'src/common/parse-objectid.pipe';

@Controller('book-instance')
export class BookInstanceController {
  constructor(private bookInstanceService: BookInstanceService) {}

  @Get()
  async getAll() {
    return this.bookInstanceService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', ParseObjectIdPipe) bookInstanceId: string) {
    return this.bookInstanceService.getById(bookInstanceId);
  }

  @Post()
  async create(@Body() createBookInstanceDto: CreateBookInstanceDto) {
    return this.bookInstanceService.create(createBookInstanceDto);
  }

  @Patch('/:id')
  async update(
    @Param('id', ParseObjectIdPipe) bookInstanceId: string,
    updateBookInstanceDto: UpdateBookInstanceDto,
  ) {
    return this.bookInstanceService.update(
      bookInstanceId,
      updateBookInstanceDto,
    );
  }

  @Delete('/:id')
  async delete(@Param('id', ParseObjectIdPipe) bookInstanceId: string) {
    return this.bookInstanceService.delete(bookInstanceId);
  }
}
