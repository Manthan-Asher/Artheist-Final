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
    const user = await User.findById(req.user.id);
    const post = new Post({
      participant: req.user.id,
      contest: req.body.contestId,
      URL: req.file.location,
    });

    await post.save();

    user.contests.unshift(req.body.contestId);
    user.posts.unshift(post._id);
    await user.save();

    const contestParticipated = await Contest.findById(req.body.contestId);
    contestParticipated.posts.unshift(post._id);
    await contestParticipated.save();
    return res.send(post);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

// @route  GET /posts
// @desc   get posts by a user
// @access  private

router.get("/", async (req, res) => {
  try {
    const posts = await Post.aggregate([
      {$sample: {size: parseInt(req.query.limit)}},
    ]).exec();

    if (posts.length === 0) {
      return res.status(404).send("No posts yet");
    }

    res.send(posts);
  } catch (error) {
    res.status(500).send("Server Error");
    console.log(error);
  }
});

// @route  GET /posts/user/:userId
// @desc   get posts by a user
// @access  private

router.get("/user/:userId", requireLogin, async (req, res) => {
  try {
    const posts = await Post.find({participant: req.params.userId}).sort({
      date: -1,
    });
    res.send(posts);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

// @route  GET /posts/:id
// @desc   get post by id
// @access  private

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("participant")
      .populate("contest")
      .exec();

    if (!post) {
      return res.status(404).send("Post Not Found");
    }

    res.send(post);
  } catch (error) {
    res.status(500).send("Server Error");
    console.log(error);
  }
});

// @route  Post /posts/like/:id
// @desc   like post
// @access  private

router.post("/like/:postId", requireLogin, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).send("Post has been already liked");
    }

    post.likes.unshift({user: req.user.id});

    await post.save();

    res.send(post.likes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
