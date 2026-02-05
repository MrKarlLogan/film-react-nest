import mongoose from 'mongoose';

export const ScheduleSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    daytime: {
      type: Date,
      required: true,
    },
    hall: {
      type: Number,
      required: true,
    },
    rows: {
      type: Number,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    taken: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { _id: false },
);
