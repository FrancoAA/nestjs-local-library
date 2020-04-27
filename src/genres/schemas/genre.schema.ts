import * as mongoose from 'mongoose';

export const GenreSchema = mongoose.Schema({
  name: { type: String, required: true, max: 100, min: 3 },
});

GenreSchema.virtual('url').get(function() {
  return `/catalog/genre/${this._id}`;
});
