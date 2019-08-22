const express = require('express');
const db = require('../database/index');
// const path = require('path');

const port = 3000;
const app = express();

app.use(require('morgan')('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}./../public`));


app.get('/places', (req, res) => {
  db.Place.find().exec().then((result) => {
    res.send(result);
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening to port ${[port]}`);
});
