const firebase = require("firebase");
const UserData = require("../models/userData");

firebase.initializeApp({
  databaseURL: "https://placemetrics-ftt.firebaseio.com"
});

const reference = firebase.database().ref("weather_data");
reference.on("value", dataFromNodeMCU => {
  console.log("Data from NODE MCU: ", dataFromNodeMCU.val());
  if (dataFromNodeMCU.val() !== null) {
    UserData.create(dataFromNodeMCU.val());
  }
});
