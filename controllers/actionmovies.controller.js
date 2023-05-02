const { read, write } = require("../model/model");

const ActionMovies = {
  GET: (req, res) => {
    try {
      const action = read("actionmovies");
      const { id, title } = req.query;
      if (req.query.id) {
        const filterAction = action.filter((action) => action.id == id);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(filterAction));
      } else {
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(action));
      }
      if (req.query.title) {
        const filterActions = action.filter((action) => action.title == title);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(filterActions));
      } else {
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(action));
      }
    } catch (error) {
      res.json(400, { status: 400, message: error.message });
      res.writeHead(400, { "Content-Type": "application/json" });
    }
  },
  POST: async (req, res) => {
    try {
      const {
        adult,
        original_language,
        backdrop_path,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        vote_average,
        vote_count,
        video,
      } = await req.body;
      const addAction = read("actionmovies");
      const newAction = {
        id: addAction.at(-1).id + 1 || 1,
        adult,
        backdrop_path,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        video,
        vote_average,
        vote_count,
      };
      addAction.push(newAction);
      write("actionmovies", addAction);
      res.json(201, { status: 201, message: "success" });
    } catch (error) {
      res.json(400, { status: 400, message: error.message });
    }
  },
  PUT: async (req, res) => {
    try {
      const {
        id,
        adult,
        backdrop_path,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        video,
        vote_average,
        vote_count,
      } = await req.body;
      const editAction = read("actionmovies");
      let editActionMovies = editAction.filter((edit) => edit.id != id);
      editActionMovies.push({
        id,
        adult,
        backdrop_path,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        video,
        vote_average,
        vote_count,
      });
      write("actionmovies", editActionMovies);
      res.json(201, { status: 201, message: "success edited" });
    } catch (error) {
      res.json(400, { status: 400, message: error.message });
    }
  },
  DELETE: async (req, res) => {
    try {
      const { id } = await req.body;
      const deleteAction = read("actionmovies");
      const delAction = deleteAction.filter((del) => del.id != id);
      write("actionmovies", delAction);
      res.json(201, { status: 201, message: "success deleted" });
    } catch (error) {
      res.json(400, { status: 400, message: error.message });
    }
  },
};

module.exports = ActionMovies;
