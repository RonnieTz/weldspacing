import { Schema, model, models } from 'mongoose';

const visitSchema = new Schema({
  value: Number,
});

export const Visit = models.Visit || model('Visit', visitSchema);
