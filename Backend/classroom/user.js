const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello fom user");
});

router.get("/:id", (req, res) => {
  res.send(`user id iss ${req.params.id}`);
});

router.get("/new", (req, res) => {
  res.send("New user created");
});

router.post("/new", (req, res) => {
  res.send("new user add");
});

router.put("/:id", (req, res) => {
  res.send("user updated");
});

module.exports = router;
