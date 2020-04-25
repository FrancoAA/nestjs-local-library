import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { GenresModule } from './genres/genres.module';
import { BookInstanceModule } from './book-instance/book-instance.module';

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || 'nestjs-local-library';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`),
    UsersModule,
    AuthorsModule,
    BooksModule,
    GenresModule,
    BookInstanceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
