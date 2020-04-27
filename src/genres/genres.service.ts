import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Genre } from './intefaces/genre.interface';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenresService {
  constructor(
    @InjectModel('Genre') private readonly genreModel: Model<Genre>,
  ) {}

  getAll(): Promise<Genre[]> {
    return this.genreModel.find();
  }

  getById(genreId: string): Promise<Genre> {
    const genre = this.genreModel.findById(genreId);
    if (!genre) {
      throw new NotFoundException(`Genre with ID ${genreId} not found.`);
    }
    return genre;
  }

  async create(createGenreDto: CreateGenreDto): Promise<Genre> {
    const genre = new this.genreModel(createGenreDto);
    await genre.save();
    return genre;
  }

  async delete(genreId: string) {
    const result = await this.genreModel.findByIdAndDelete(genreId);
    console.log(result);
    return result;
  }

  async update(
    genreId: string,
    updateGenreDto: UpdateGenreDto,
  ): Promise<Genre> {
    return this.genreModel.findByIdAndUpdate(genreId, updateGenreDto, {
      new: true,
    });
  }
}
