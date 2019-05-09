const mongoose = require("../database");

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
    default: Date.now
  }
});

const UserData = mongoose.model("UserData", UserDataSchema);
module.exports = UserData;
