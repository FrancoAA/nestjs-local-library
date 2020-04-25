import { Document } from 'mongoose';

export interface BookInstance extends Document {
  book: string;
  imprint: string;
  status: string;
  dueBack: Date;
}
