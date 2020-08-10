const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const gravatar = require("gravatar");

// require Model
const User = mongoose.model("User");

//@route   POST /user
// @desc   Register user
// @access  Public

router.post("/", async (req, res) => {
  const {
    firstName,
    lastName,
    username,
    password,
    mobile_number,
    siteName,
    about,
    social_media_handle,
  } = req.body;

  try {
    const avatarImage = gravatar.url(username, {
      s: "200",
      r: "pg",
      d: "mm",
    });
    await User.register(
      {
        username,
        mobile_number,
        firstName,
        lastName,
        siteName,
        about,
        social_media_handle,
        profile_pic: avatarImage,
      },
      password,
      (err, user) => {
        if (err) {
          return res.send(err);
        } else {
          passport.authenticate("local")(req, res, function () {
            res.status(200).send(user);
          });
        }
      }
    );
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

//@route   POST /user/login
//@desc   Login user
//@access  Public

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({username: req.body.username});

    if (!user) {
      throw new Error("Unable to login");
    }

    req.login(user, (err) => {
      if (err) {
        res.send(err);
      } else {
        passport.authenticate("local")(req, res, function () {
          res.status(200).send(user);
        });
      }
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
