const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/placemetricsAPI", {
  useMongoClient: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
