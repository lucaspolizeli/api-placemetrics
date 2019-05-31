const mongoose = require("../database");
const moment = require("moment-timezone");
const sp = moment.tz("2014-06-01 12:00", "America/Sao_Paulo");

function toTimeZone(time, zone) {
  var format = "YYYY/MM/DDTHH:mm:ss ZZ";
  return moment(time, format)
    .tz(zone)
    .format(format);
}

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
    default: toTimeZone(Date.now, "America/Sao_Paulo")
  }
});

const UserData = mongoose.model("UserData", UserDataSchema);
module.exports = UserData;
