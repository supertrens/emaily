const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({ hi: 'there, this is an upgrade version' })
});

app.listen(PORT, () => {
  console.log('App is listening')
})