const mongoose = require("mongoose");
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const {
  facebookID,
  facebookSecret,
  googleClientID,
  googleClientSecret,
} = require("../config/keys");

// require Model
const User = mongoose.model("User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

// Google Strategy
passport.use(
  new googleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/contests",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({googleId: profile.id});

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({
        googleId: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        username: profile.emails[0].value,
        profile_pic: profile.photos[0].value,
      }).save();
      done(null, user);
    }
  )
);

// Facebook Strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: facebookID,
      clientSecret: facebookSecret,
      callbackURL: "/auth/facebook/contests",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({facebookId: profile.id});

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({facebookId: profile.id}).save();
      done(null, user);
    }
  )
);
