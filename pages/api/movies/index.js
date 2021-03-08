import servicesMovies from "../../../services/movies";
import enablePublicAccess from "../../../cors-middleware"

const apiMovies = async (req, res) => {
  await enablePublicAccess(req, res)
  try {
    switch (req.method) {
      case "GET":
        const allMovies = await servicesMovies.getAllMovies();
        res.status(200).json(allMovies);
        break;

      case "POST":
        const data = req.body;
        const newMovie = await servicesMovies.createMovie(data);
        res.status(201).json({
          created: true,
          movieID: newMovie.ops.map((item) => item._id),
        });
        break;

      default:
        res.status(404).json("Nothing here");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "something went wrong",
    });
  }
};

export default apiMovies;
