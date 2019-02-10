const passport = require('passport');

const authGoogleController = (req, res) => {
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
};

const currentUserController = (req, res) => {
  res.send(req.user);
}

const logoutController = (req, res) => {
  req.logout();
  res.send(req.user);
}

const googleCallbackController = passport.authenticate('google');

module.exports = {
  authGoogleController,
  googleCallbackController,
  currentUserController,
  logoutController
}