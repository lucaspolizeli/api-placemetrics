const express = require("express");
const UserData = require("../models/userData");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const userData = await UserData.create(req.body);
    return res.send({ userData });
  } catch (error) {
    return res.status(400).send({ error: "Failed to send." });
  }
});

router.get("/", async (req, res) => {
  try {
    const userData = await UserData.find();
    res.send({ userData });
  } catch (error) {
    return res.status(400).send({ error: "Failed to load data." });
  }
});

router.get("/:userIp", async (req, res) => {
  try {
    const userData = await UserData.find()
                    .where('userIp')
                    .equals(req.params.userIp)
                    .select('_id temperature humidity userIp createdAt')
                    .exec();
    res.send({
      userData
    });
  } catch (error) {
    return res.status(400).send({
      error: "Failed to load data."
    });
  }
});

router.get("since/:datetime", async (req, res) => {
  try {
    const userData = await UserData.find()
                    .where('createdAt').gt(Date(req.params.datetime))
                    .select('_id temperature humidity userIp createdAt')
                    .exec();
    if (!userData.length) 
    return res.status(204);
    
    res.send({ userData });
  } catch (error) {
    return res.status(400).send({ error: "Failed to load data." });
  }
});

router.get("on/:date", async (req, res) => {
  try {
    const userData = await UserData.find().
                    where('createdAt')
                    .gt(Date(req.params.date).setHours(0, 0, 0, 0))
                    .lt(Date(req.params.date).setHours(23, 59, 59, 999))
                    select('_id temperature humidity userIp createdAt')
                    exec();
    if (!userData.length) 
    return res.status(204);
    
    res.send({ userData });
  } catch (error) {
    return res.status(400).send({ error: "Failed to load data." });
  }
});

router.get("/from/:startDate/to/:endDate", async (req, res) => {
  try {
    const userData = await UserData.find()
                    .where('createdAt')
                    .gt(Date(req.params.startDate))
                    .lt(Date(req.params.endDate))
                    .select('_id temperature humidity userIp createdAt')
                    .exec();
    if (!userData.length) 
    return res.status(204);
    
    res.send({
      userData
    });
  } catch (error) {
    return res.status(400).send({
      error: "Failed to load data."
    });
  }
});

module.exports = app => app.use("/", router);
