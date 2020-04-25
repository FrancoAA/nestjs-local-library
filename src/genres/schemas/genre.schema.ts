import * as mongoose from 'mongoose';

export const Genre = mongoose.Schema({
  name: { type: String, required: true, max: 100, min: 3 },
});

Genre.virtual('url').get(function() {
  return `/catalog/genre/${this._id}`;
});
