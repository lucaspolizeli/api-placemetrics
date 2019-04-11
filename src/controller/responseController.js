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

router.get("/", (req, res) => {
  res.send({ ok: true });
});

module.exports = app => app.use("/", router);
