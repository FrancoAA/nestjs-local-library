import { Module } from '@nestjs/common';
import { AuthorSchema } from './schemas/author.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }]),
  ],
})
export class AuthorsModule {}
