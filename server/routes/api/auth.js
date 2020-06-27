const express = require("express");
const router = express.Router();
const passport = require("passport");
const findOrCreate = require("mongoose-findorcreate");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const config = require("config");
const googleID = config.get("googleClientID");
const facebookID = config.get("facebookID");
const googleSecret = config.get("googleClientSecret");
const facebookSecret = config.get("facebookSecret");

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

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: googleID,
      clientSecret: googleSecret,
      callbackURL: "http://localhost:5000/auth/google/contests",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({googleId: profile.id}, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

// Facebook Strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: facebookID,
      clientSecret: facebookSecret,
      callbackURL: "http://localhost:5000/auth/facebook/contests",
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({facebookId: profile.id}, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

//@route   GET /auth/google
//@desc   Login with google
//@access  Public

router.get("/google", passport.authenticate("google", {scope: ["profile"]}));

//@route   GET /auth/google/contests
//@desc    Redirected page after login with google
//@access  Public

router.get(
  "/google/contests",
  passport.authenticate("google", {failureRedirect: "/"}),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/contests");
  }
);

//@route   GET /auth/facebook
//@desc   Login with facebook
//@access  Public

router.get("/facebook", passport.authenticate("facebook"));

//@route   GET /auth/facebook/contests
//@desc    Redirected page after login with facebook
//@access  Public

router.get(
  "/facebook/contests",
  passport.authenticate("facebook", {failureRedirect: "/"}),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/contests");
  }
);

module.exports = router;
