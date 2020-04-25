import { Document } from 'mongoose';

export interface Author extends Document {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  dateOfDeath: Date;
}
