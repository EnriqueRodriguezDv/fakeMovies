const db = require("../lib/mongo");

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
  const movie = await db.create(TABLE, newMovie);
  return movie;
}

async function updateMovie(movieUpdated, id) {
  const movie = await db.update(TABLE, movieUpdated, id);
  return movie;
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
