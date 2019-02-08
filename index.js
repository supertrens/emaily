require('./authentication/passport');
require('./db/mongoose');

const express = require('express');

const authRoutes = require('./authentication/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

authRoutes(app);

app.listen(PORT, () => {
  console.log('App is listening')
})