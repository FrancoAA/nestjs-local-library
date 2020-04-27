import { Module } from '@nestjs/common';
import { BookInstanceService } from './book-instance.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookInstance } from './schemas/book-instance.schema';
import { BooksModule } from 'src/books/books.module';
import { BookInstanceController } from './book-instance.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'BookInstance',
        schema: BookInstance,
      },
    ]),
    BooksModule,
  ],
  providers: [BookInstanceService],
  controllers: [BookInstanceController],
})
export class BookInstanceModule {}
