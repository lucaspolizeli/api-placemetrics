const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://placemetrics:@place123@placemetrics-ulumj.mongodb.net/test?retryWrites=true",
    { useNewUrlParser: true }
  )
  .catch(error => {
    console.log(error);
  });

mongoose.Promise = global.Promise;

module.exports = mongoose;
