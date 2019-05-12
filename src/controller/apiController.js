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
    const userData = await UserData.find({ userIp: req.params.userIp });
    if (!userData.length) return res.status(204);

    res.send({ userData });
  } catch (error) {
    return res.status(400).send({ error: "Failed to load data." });
  }
});

module.exports = app => app.use("/", router);
