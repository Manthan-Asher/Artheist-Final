const express = require("express");
const router = express.Router();
const passport = require("passport");

//@route   GET /contests
//@desc   Contests page
//@access  Private

router.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    res.send("Congo you made it through");
  } else {
    res.redirect("/");
  }
});

module.exports = router;
