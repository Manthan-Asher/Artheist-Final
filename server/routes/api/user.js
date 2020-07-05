const express = require("express");
const router = express.Router();
const passport = require("passport");
const gravatar = require("gravatar");

// require Model
const User = require("../../models/User");

passport.use(User.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

//@route   POST /user
// @desc   Register user
// @access  Public

router.post("/", async (req, res) => {
  const {
    name,
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
        name,
        siteName,
        about,
        social_media_handle,
        avatar: avatarImage,
      },
      password,
      (err, user) => {
        if (err) {
          return res.send(err);
        } else {
          passport.authenticate("local")(req, res, function () {
            res.status(200);
            res.json(req.user);
          });
        }
      }
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

//@route   POST /user/login
//@desc   Login user
//@access  Public

router.post("/login", (req, res) => {
  const {username, password} = req.body;
  const user = new User({
    username,
    password,
  });

  req.login(user, (err) => {
    if (err) {
      res.send({errors: [err]});
    } else {
      passport.authenticate("local")(req, res, function () {
        res.status(200);
        res.json(req.user);
      });
    }
  });
});

//@route   GET /user/logout
//@desc   Logout user
//@access  Public

router.get("/logout", (req, res) => {
  req.logout();
  res.send("User logged out successfully");
});

module.exports = router;
