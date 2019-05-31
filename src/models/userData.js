const mongoose = require("../database");
const moment = require("moment-timezone");
// const sp = moment.tz("2014-06-01 12:00", "America/Sao_Paulo");

function toTimeZone(time, zone) {
  // var format = 'YYYY/MM/DD HH:mm:ss ZZ';
  console.log("-> ", moment(time).tz(zone));
  return moment(time).tz(zone);
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
    default: toTimeZone(Date.now())
  }
});

const UserData = mongoose.model("UserData", UserDataSchema);
module.exports = UserData;
