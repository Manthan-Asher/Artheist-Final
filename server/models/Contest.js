const mongoose = require("mongoose");

//  CREATING SCHEMA

const contestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  start_date: {
    type: String,
    required: true,
  },
  end_date: {
    type: String,
    required: true,
  },
  prize: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  organized_by: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    // required: true,
  },
  imageUrl: String,
  juries: [
    {
      type: String,
      required: true,
    },
  ],
});

mongoose.model("Contest", contestSchema);
