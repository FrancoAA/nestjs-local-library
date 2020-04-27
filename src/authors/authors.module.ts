import { Module } from '@nestjs/common';
import { AuthorSchema } from './schemas/author.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }]),
  ],
  providers: [AuthorsService],
  controllers: [AuthorsController],
})
export class AuthorsModule {}
