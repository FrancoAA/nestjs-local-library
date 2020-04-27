import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GenreSchema } from './schemas/genre.schema';
import { GenresController } from './genres.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Genre', schema: GenreSchema }]),
  ],
  providers: [GenresService],
  controllers: [GenresController],
})
export class GenresModule {}
