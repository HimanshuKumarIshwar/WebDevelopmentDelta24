const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("New post");
});
router.get("/:id", (req, res) => {
  res.send(`post id is ${req.params.id}`);
});

module.exports = router;
