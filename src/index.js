const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./controller/responseController")(app);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running at port " + (process.env.PORT || 3000) + ".");
});
