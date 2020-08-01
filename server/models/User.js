const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

//  CREATING SCHEMA

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
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
  profile_pic: String,
  avatar: Buffer,
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

mongoose.model("User", UserSchema);
