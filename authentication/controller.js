const passport =  require('passport');

const authGoogleController = passport.authenticate('google', {
  scope: ['profile', 'email']
});

const googleCallbackController = passport.authenticate('google', (req , res) => {
  console.log(res)
})

const currentUserController = (req, res) => {
  res.send(req.user);
}

const logoutController = (req, res) => {
  req.logout();
  res.send(req.user);
};


module.exports = {
  authGoogleController,
  currentUserController,
  logoutController,
  googleCallbackController
}