const express = require("express");
const Sentry = require("@sentry/node");
const config = require("./config");

class App {
  constructor() {
    this.express = express();

    Sentry.init(config);

    this.routes();
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express.listen(3333);
