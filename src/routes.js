const express = require("express");
const MainController = require("./controllers/MainController");

const routes = new express.Router();

routes.get("/", MainController.index);
routes.get("/monitor", MainController.monitor);

module.exports = routes;
