const express = require("express");
const router = express.Router();

//user routes
//index route
router.get("/", (req, res) => {
  res.send("get all users");
});
//show route
router.get("/:id", (req, res) => {
  res.send("show the user");
});
//post route
router.post("/", (req, res) => {
  res.send("post a user");
});
//Delete route
router.delete("/:id", (req, res) => {
  res.send("delete the user");
});

module.exports = router;
