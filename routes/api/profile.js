const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const upload = require("../../config/multer");
const passport = require("passport");
const sharp = require("sharp");
const requireLogin = require("../../middleware/requireLogin");

const User = mongoose.model("User");

router.patch(
  "/me/avatar",
  requireLogin,
  upload.single("avatar"),
  async (req, res) => {
    const buffer = await sharp(req.file.buffer)
      .resize({width: 250, height: 250})
      .png()
      .toBuffer();
    req.user.avatar = buffer;
    await req.user.save();
    res.status(200).send("Avatar Uploaded");
  },
  (error, req, res, next) => {
    res.status(400).send({error: error.message});
  }
);

router.get("/:id/avatar", requireLogin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user || !user.avatar) {
      throw new Error();
    }

    res.set("Content-Type", "image/png");
    res.send(user.avatar);
  } catch (e) {
    res.status(404).send({error: e.message});
  }
});

router.patch("/me", requireLogin, async (req, res) => {
  const profileFields = {};
  const {username, gender, age, about, dob, phoneNumber} = req.body;

  if (username) profileFields.site_name = username;
  if (gender) profileFields.gender = gender;
  if (age) profileFields.age = age;
  if (about) profileFields.about = about;
  if (phoneNumber) profileFields.mobile_number = phoneNumber;
  if (dob) profileFields.dob = dob;

  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: profileFields,
      },
      {
        new: true,
      }
    );
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
