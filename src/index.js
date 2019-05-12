const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./controller/apiController")(app);
require("./controller/firebaseController");

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running at port " + (process.env.PORT || 3000) + ".");
});
