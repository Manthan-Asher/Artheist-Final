const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../../middleware/requireLogin");

const Contest = mongoose.model("Contest");
//@route   GET /contests
//@desc    get Contests
//@access  Private

router.get("/", requireLogin, async (req, res) => {
  try {
    const contests = await Contest.find({});
    res.send(contests);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//@route   GET /contests/:id
//@desc    get contests by id
//@access  Private

router.get("/:id", requireLogin, async (req, res) => {
  try {
    const contest = await Contest.findById(req.params.id);
    res.send(contest);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//@route   POST /contests/create
//@desc    Create Contests page
//@access  Private

router.post("/create", requireLogin, async (req, res) => {
  // const {name,start_date,end_date,prize,type,organized_by,description,status,imageUrl,juries}=req.body
  try {
    const contest = new Contest(req.body);
    await contest.save();
    res.status(200).send(contest);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
