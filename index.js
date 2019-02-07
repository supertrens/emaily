const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('./config/key');

const app = express();
const PORT = process.env.PORT || 5000;

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken => {
    console.log(accessToken)
  })
  )
);

app.listen(PORT, () => {
  console.log('App is listening')
})