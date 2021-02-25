const Joi = require("@hapi/joi");

const movieIDSchema = Joi.string().regex(/^[0-9a-fA-F]$/);
const titleMovieSchema = Joi.string().max(50);
const yearMovieSchema = Joi.number().max(2100).min(1800);
const coverMovieSchema = Joi.string();
const descriptionMovieSchema = Joi.string().max(500).min(1);
const durationMovieSchema = Joi.number().max(20000).min(1);
const contentRatingMovieSchema = Joi.string().max(5).min(1);
const tagMovieSchema = Joi.array().items(Joi.string().max(15));

const createMovieSchema = {
  title: titleMovieSchema.required(),
  year: yearMovieSchema,
  cover: coverMovieSchema.required(),
  description: descriptionMovieSchema,
  duration: durationMovieSchema,
  contentRating: contentRatingMovieSchema,
  tags: tagMovieSchema,
};

const updateMovieSchema = {
  title: titleMovieSchema,
  year: yearMovieSchema,
  cover: coverMovieSchema,
  description: descriptionMovieSchema,
  duration: durationMovieSchema,
  contentRating: contentRatingMovieSchema,
  tags: tagMovieSchema,
};

module.exports = {
  movieIDSchema,
  createMovieSchema,
  updateMovieSchema,
};
