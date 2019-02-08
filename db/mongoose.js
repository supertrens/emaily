const mongoose = require('mongoose');

const { mongoURI } = require('./../config/key');

mongoose.connect(mongoURI, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('open', function() {
    console.log('App is connected to the database');
});

db.on('error', function(err) {
    console.log(err);
});