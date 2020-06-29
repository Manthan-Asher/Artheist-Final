const mongoose = require("mongoose");

//  CREATING SCHEMA

const contestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
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
  organised_by: {
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
    required: true,
  },
  imageUrl: String,
  juries: [
    {
      type: String,
      required: true,
    },
  ],
});

//  ADD PLUGINS FOR PASSPORT HERE!!

//  EXPORTING MODEL
module.exports = Contest = mongoose.model("Contest", contestSchema);
