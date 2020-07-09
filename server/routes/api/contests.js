const express = require("express");
const router = express.Router();
const passport = require("passport");
const Contest = require("../../models/Contest");

//@route   GET /contests
//@desc    Create Contests page
//@access  Private

router.get("/", async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const contests = await Contest.find({});
      res.send(contests);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
});

//@route   POST /contests/create
//@desc    Create Contests page
//@access  Private

router.post("/create", async (req, res) => {
  if (req.isAuthenticated()) {
    // const {name,start_date,end_date,prize,type,organized_by,description,status,imageUrl,juries}=req.body
    try {
      const contest = new Contest(req.body);
      await contest.save();
      res.status(200).send(contest);
    } catch (error) {
      res.status(400).send(error.message);
    }
  } else {
    res.status(401).redirect("/");
  }
});

module.exports = router;
