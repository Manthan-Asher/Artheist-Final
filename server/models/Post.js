const mongoose = require("mongoose");

//  CREATING SCHEMA

const PostSchema = new mongoose.Schema({
  participant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
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
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  URL: {
    type: String,
    required: true,
  },
  ranking: Number,
  jury_score: Number,
});

mongoose.model("Post", PostSchema);
