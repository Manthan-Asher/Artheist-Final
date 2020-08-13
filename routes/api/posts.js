const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Post = mongoose.model("Post");
const User = mongoose.model("User");
const Contest = mongoose.model("Contest");
const requireLogin = require("../../middleware/requireLogin");
const uploadPost = require("../../config/S3");
// @route  POST /posts
// @desc    Create a post
// @access  private

router.post("/", requireLogin, uploadPost.single("post"), async (req, res) => {
  try {
    const post = new Post({
      participant: req.user.id,
      contest: req.body.contestId,
      URL: req.file.location,
    });

    await post.save();
    res.send(post);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

// @route  GET /posts
// @desc   get all posts
// @access  private

router.get("/", requireLogin, async (req, res) => {
  try {
    const posts = await Post.find().sort({date: -1});
    res.send(posts);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

// @route  GET /posts/:id
// @desc   get post by id
// @access  private

router.get("/:id", requireLogin, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).send("Post Not Found");
    }

    res.send(post);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
