const servicesMovies = require("../../../services/movies");

const apiMovieWithID = async (req, res) => {
  try {
    switch (req.method) {
      case "GET":
        const getMovie = await servicesMovies.getOneMovie(req.query.id);
        res.status(200).json(getMovie);
        break;

      case "PUT":
        const postMovie = await servicesMovies.updateMovie(
          req.body,
          req.query.id
        );
        res.status(201).json({
          updated: true,
          movie: postMovie,
        });
        break;

      case "DELETE":
        await servicesMovies.deleteOneMovie(req.query.id);

      default:
        res.status(404).json("Nothing here");
        break;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong",
    });
  }
};

export default apiMovieWithID;
