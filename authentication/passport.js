const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const { googleClientID, googleClientSecret } = require('./../config/key');
const User = require('./../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    console.log(err);
  }
});

passport.use(
  new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, validateGoogleProfile));

async function validateGoogleProfile(accessToken, refreshToken, profile, done) {
  try {
    const userInDB = await User.findOne({ googleId: profile.id });

    if (userInDB) {
      done(null, userInDB);
    } else {
      const user = createUser(profile);
      if (user) {
        done(null, user);
      }
    }
  } catch (err) {
    console.log(err)
  }
}

const createUser = async (profile) => {
  const newUser = new User({
    googleId: profile.id,
    familyName: profile.name.familyName,
    givenName: profile.name.givenName
  });

  try {
    const user = await newUser.save();

    return user;
  } catch (err) {
    console.log(err)
  }
}