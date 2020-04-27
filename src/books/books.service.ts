import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async getAll(): Promise<Model<Book>[]> {
    return this.bookModel.find().populate('genre');
  }

  getById(bookId: string): Promise<Model<Book>> {
    const found = this.bookModel.findById(bookId).populate('genre');

    if (!found) {
      throw new NotFoundException(`Book with ID ${bookId} was not found.`);
    }

    return found;
  }

  async create(createBookDto: CreateBookDto) {
    const newBook = new this.bookModel(createBookDto);
    await newBook.save();
    return newBook;
  }

  async update(bookId: string, updateBookDto: UpdateBookDto) {
    const book = await this.getById(bookId);
    const { title, author, summary, isbn, genre } = updateBookDto;

    book.title = title || book.title;
    book.author = author || book.author;
    book.summary = summary || book.summary;
    book.isbn = isbn || book.isbn;
    book.genre = genre || book.genre;

    await book.save();
    return book;
  }

  async delete(bookId: string) {
    const result = this.bookModel.findByIdAndDelete(bookId);
    return result;
  }
}
