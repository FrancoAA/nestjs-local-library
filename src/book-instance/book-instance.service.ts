import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BookInstance } from './interfaces/book-instance.interface';
import { CreateBookInstanceDto } from './dto/create-book-instance.dto';
import { UpdateBookInstanceDto } from './dto/update-book-instance.dto';
import { BooksService } from 'src/books/books.service';

@Injectable()
export class BookInstanceService {
  constructor(
    @InjectModel('BookInstance')
    private readonly bookInstanceModel: Model<BookInstance>,
    private readonly bookService: BooksService,
  ) {}

  getAll() {
    return this.bookInstanceModel.find();
  }

  async getById(bookInstanceId: string) {
    const bookInstance = await this.bookInstanceModel.findById(bookInstanceId);
    if (!bookInstance) {
      throw new NotFoundException(
        `Book Instance with ID ${bookInstanceId} not found.`,
      );
    }
    return bookInstanceId;
  }

  async create(createBookInstanceDto: CreateBookInstanceDto) {
    const { book } = createBookInstanceDto;
    await this.bookService.getById(book); // do this to check if the book exists or not
    const newBookInstance = new this.bookInstanceModel(createBookInstanceDto);
    return newBookInstance;
  }

  async update(
    bookInstanceId: string,
    updateBookInstanceDto: UpdateBookInstanceDto,
  ) {
    return this.bookInstanceModel.findByIdAndUpdate(
      bookInstanceId,
      updateBookInstanceDto,
      { new: true },
    );
  }

  async delete(bookInstanceId: string) {
    return this.bookInstanceModel.findByIdAndDelete(bookInstanceId);
  }
}
