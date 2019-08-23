const express = require('express');
const db = require('../database/index');
// const path = require('path');

const port = 3000;
const app = express();

app.use(require('morgan')('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}./../public`));


app.get('/api/nearbyPlaces/:id', (req, res) => {
  // ranges from 8 - 13
  const randomAmount = Math.floor(Math.random() * 6 + 8);
  const randomSkip = Math.floor(Math.random() * 101);
  db.Place.find().skip(randomSkip).limit(randomAmount).exec()
    .then((result) => {
      res.send(result);
    });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening to port ${[port]}`);
});
