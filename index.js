require('./services/passport');

const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const { mongoURI } = require('./config/key');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(mongoURI, { useNewUrlParser: true });

authRoutes(app);

app.listen(PORT, () => {
  console.log('App is listening')
})