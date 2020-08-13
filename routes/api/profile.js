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

module.exports = router;
