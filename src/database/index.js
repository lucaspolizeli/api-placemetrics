const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/placemetricsAPI", {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
