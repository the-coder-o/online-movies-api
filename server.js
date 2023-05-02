const http = require("http");
const PORT = process.env.PORT || 5555;
const Express = require("./lib/express");
// Controllers
const Allmovies = require("./controllers/allmovies.controller");
const ActionMovies = require("./controllers/actionmovies.controller");

const API_ROUTE = "/vumoo-movies";

const createHttp = (req, res) => {
  const app = new Express(req, res);

  app.get(`${API_ROUTE}/all-movies`, Allmovies.GET);

  app.get(`${API_ROUTE}/action-movies`, ActionMovies.GET);
  app.post(`${API_ROUTE}/add-action-movies`, ActionMovies.POST);
  app.put(`${API_ROUTE}/edit-action-movies`, ActionMovies.PUT);
  app.delete(`${API_ROUTE}/delete-action-movies`, ActionMovies.DELETE);
};

http
  .createServer(createHttp)
  .listen(PORT, () => console.log("server successfully running"));
