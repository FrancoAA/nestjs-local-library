import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from './interfaces/author.interface';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectModel('Author') private readonly authorModel: Model<Author>,
  ) {}

  async getAll(): Promise<Model<Author>[]> {
    return this.authorModel.find();
  }

  getById(authorId: string): Promise<Model<Author>> {
    const found = this.authorModel.findById(authorId);

    if (!found) {
      throw new NotFoundException(`Book with ID ${authorId} was not found.`);
    }

    return found;
  }

  async create(createAuthorDto: CreateAuthorDto) {
    const newAuthor = new this.authorModel(createAuthorDto);
    await newAuthor.save();
    return newAuthor;
  }

  async update(authorId: string, updateAuthorDto: UpdateAuthorDto) {
    const result = await this.authorModel.findByIdAndUpdate(
      authorId,
      updateAuthorDto,
      { new: true },
    );
    console.log('Result', result);
    return result;
  }

  async delete(authorId: string) {
    const result = this.authorModel.findByIdAndDelete(authorId);
    return result;
  }
}
