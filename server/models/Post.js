const mongoose = require("mongoose");

//  CREATING SCHEMA

const PostSchema = new mongoose.Schema({
  participant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  contest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contest",
  },
  URL: {
    type: String,
    required: true,
  },
  ranking: Number,
  jury_score: Number,
});

//  ADD PLUGINS FOR PASSPORT HERE!!

//  EXPORTING MODEL
module.exports = Post = mongoose.model("Post", postSchema);
