const express = require("express");
const router = express.Router();
//posts

//index route
router.get("/", (req, res) => {
  res.send("get all posts");
});
//show route
router.get("/:id", (req, res) => {
  res.send("show the posts");
});
//post route
router.post("/", (req, res) => {
  res.send("post a posts");
});
//Delete route
router.delete("/:id", (req, res) => {
  res.send("delete the posts");
});

module.exports = router;
