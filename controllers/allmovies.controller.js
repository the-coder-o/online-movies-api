const { read, write } = require("../model/model");

const AllMovies = {
  GET: (req, res) => {
    try {
      const movie = read("allmovies");
      const { title } = req.query;
      if (req.query.title) {
        const filterMovies = movie.filter((search) => search.title == title);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(filterMovies));
      } else {
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(movie));
      }
    } catch (error) {
      res.json(400, { status: 400, message: error.message });
      res.writeHead(400, { "Content-Type": "application/json" });
    }
  },
};

module.exports = AllMovies;
