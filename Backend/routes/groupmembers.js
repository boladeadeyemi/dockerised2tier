const express = require("express");
const router = express.Router();

const groupMembers = [
  "Felix",
  "James",
  "Idowu",
  "Agape",
  "Afeez",
  "John",
  "Bolade",
  "Folasade",
  "Ifeoluwa",
  "Paul",
  "Peter",
  "Peace",
  "Esther",
  "Ibiyemi",
  "Hassan",
  "Abdulmalik",
];

router.get("/", (req, res) => {
  res.json({ groupMembers });
});

module.exports = router;
