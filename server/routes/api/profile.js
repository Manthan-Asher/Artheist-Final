const express = require("express");
const router = express.Router();
const upload = require("../../config/multer");
const sharp = require("sharp");

const User = require("../../models/User");

router.patch(
  "/me/avatar",
  upload.single("avatar"),
  async (req, res) => {
    if (!req.user) {
      return res.status(401).send("Please authenticate");
    }
    const buffer = await sharp(req.file.buffer)
      .resize({width: 250, height: 250})
      .png()
      .toBuffer();
    req.user.avatar = buffer;
    await req.user.save();
    res.status(200).send();
  },
  (error, req, res, next) => {
    res.status(400).send({error: error.message});
  }
);

router.get("/:id/avatar", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user || !user.avatar) {
      throw new Error();
    }

    res.set("Content-Type", "image/png");
    res.send(user.avatar);
  } catch (e) {
    res.status(404).send();
  }
});

module.exports = router;
