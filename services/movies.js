const db = require("../lib/mongo");
const Joi = require("@hapi/joi");

const schema = require("../utils/schema/movies");

const TABLE = "movies";

async function getAllMovies() {
  const movies = await db.getAll(TABLE);
  return movies;
}

async function getOneMovie(id) {
  const movie = await db.getOne(TABLE, id);
  return movie;
}

async function createMovie(newMovie) {
  const { error } = Joi.object(schema.createMovieSchema).validate(newMovie);
  console.log(error);
  if (!error) {
    const movie = await db.create(TABLE, newMovie);
    return movie;
  } else {
    return error;
  }
}

async function updateMovie(movieUpdated, id) {
  const { error } = Joi.object(schema.updateMovieSchema).validate(movieUpdated);
  if (!error) {
    const movie = await db.update(TABLE, movieUpdated, id);
    return movie;
  } else {
    return error;
  }
}

async function deleteOneMovie(id) {
  await db.deleteOne(TABLE, id);
}

module.exports = {
  getAllMovies,
  getOneMovie,
  createMovie,
  updateMovie,
  deleteOneMovie,
};
