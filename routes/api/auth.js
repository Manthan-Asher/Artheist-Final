const express = require("express");
const router = express.Router();
const passport = require("passport");

//@route   GET /auth/google
//@desc   Login with google
//@access  Public
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
//@route   GET /auth/google/contests
//@desc    Redirected page after login with google
//@access  Public

router.get("/google/contests", passport.authenticate("google"), (req, res) => {
  if (req.user.isNew) {
    res.redirect("/additionalDetails");
  } else {
    res.redirect("/contest");
  }
});

//@route   GET /auth/facebook
//@desc   Login with facebook
//@access  Public

router.get(
  "/facebook",
  passport.authenticate("facebook", {scope: ["profile"]})
);

//@route   GET /auth/facebook/contests
//@desc    Redirected page after login with facebook
//@access  Public

router.get(
  "/facebook/contests",
  passport.authenticate("facebook"),
  (req, res) => {
    if (req.user.isNew) {
      return res.redirect("/additionalDetails");
    }
    res.redirect("/contest");
  }
);

//@route   GET /auth/current_user
//@desc    Send user data
//@access  Public

router.get("/current_user", (req, res) => {
  res.send(req.user);
});

//@route   GET /auth/logout
//@desc   Logout user
//@access  Public

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
