import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schemas/book.schema';
import { BooksController } from './books.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Book',
        schema: BookSchema,
      },
    ]),
  ],
  providers: [BooksService],
  exports: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
