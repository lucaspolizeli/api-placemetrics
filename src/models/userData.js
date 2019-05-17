const mongoose = require("../database");
const moment = require("moment");

const UserDataSchema = new mongoose.Schema({
  temperature: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  userIp: {
    type: String
  },
  createdAt: {
    type: Date,
    default: moment().format()
  }
});

const UserData = mongoose.model("UserData", UserDataSchema);
module.exports = UserData;
