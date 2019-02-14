require('./authentication/passport');
require('./db/mongoose');

const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');

const authRoutes = require('./authentication/authRoutes');
const { cookieKey } = require('./config/key');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cookieSession({
    name: 'session',
    maxAge: 30 * 24 * 60 * 60 * 1000, // expired in 30 days
    keys: [cookieKey] // can add more keys, to be pick randomly if I want to
  })
);

// let express know that we are using passport to manage cookies/session
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
});