import * as mongoose from 'mongoose';

export const BookInstance = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'],
    default: 'Maintenance',
  },
  dueBack: { type: Date, default: Date.now },
});

BookInstance.virtual('url').get(function() {
  return `/catalog/book-instance/${this._id}`;
});
