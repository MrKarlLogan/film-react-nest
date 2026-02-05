import mongoose from 'mongoose';
import { ScheduleSchema } from './schedule';

export const FilmSchema = new mongoose.Schema({
  rating: {
    type: Number,
    require: true,
  },
  director: {
    type: String,
    require: true,
  },
  tags: [
    {
      type: String,
      require: true,
    },
  ],
  image: {
    type: String,
    require: true,
  },
  cover: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  about: {
    type: String,
    require: true,
  },
  desription: {
    type: String,
    require: true,
  },
  schedule: [ScheduleSchema],
});

export const Film = mongoose.model('Film', FilmSchema);
