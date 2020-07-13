const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

//  CREATING SCHEMA

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  site_name: {
    type: String,
  },
  username: {
    type: String,
  },
  password: String,
  googleId: String,
  facebookId: String,
  avatar: String,
  about: String,
  insta_handle: String,
  contests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contest",
    },
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  mobile_number: {
    type: Number,
  },
});

//  ADD PLUGINS FOR PASSPORT HERE!!
UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(findOrCreate);

const User = mongoose.model("User", UserSchema);

//  EXPORTING MODEL

module.exports = User;
