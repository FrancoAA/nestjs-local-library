import { Module } from '@nestjs/common';
import { AuthorSchema } from './schemas/author.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsService } from './authors.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }]),
  ],
  providers: [AuthorsService],
})
export class AuthorsModule {}
