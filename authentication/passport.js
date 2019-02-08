const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('./../config/key');
const User = require('./../models/User');

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
    (accessToken, refreshToken, profile, done) => {
      const newUser = new User({
        googleId: profile.id,
        familyName: profile.name.familyName,
        givenName: profile.name.givenName
      });

      newUser.save().then(user => {
        console.log(user);
      }).catch(e => console.log(e))
    }
  )
);
