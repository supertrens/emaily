const {
  authGoogleController,
  googleCallbackController,
  currentUserController,
  logoutController
} = require('./controller');

module.exports = (app) => {
  app.get('/auth/google', authGoogleController);
  app.get('/auth/google/callback',  googleCallbackController);

  app.get('/api/logout', logoutController)
  app.get('/api/current_user', currentUserController)
}
