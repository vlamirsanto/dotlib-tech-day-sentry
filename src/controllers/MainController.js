const Sentry = require("@sentry/node");

module.exports = {
  async index(req, res) {
    return res.status(200).json({ message: "DOTLIB TECH DAY" });
  },

  async monitor(req, res) {
    try {
      return someFunction();
    } catch (err) {
      // Sentry.captureMessage("Alguma coisa deu errada");
      Sentry.captureException(err);
    }
  }
};
