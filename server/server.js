const express = require('express');
const cors = require('cors');
const model = require('../database/index');
// const path = require('path');

const port = 3004;
const app = express();

app.use(require('morgan')('dev'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/listing/:id', express.static('public'));
app.use(express.static('node_modules'));
app.use(express.static('public'));


app.get('/api/nearbyPlaces/:id', (req, res) => {
  // ranges from 8 - 13
  const randomAmount = Math.floor(Math.random() * 6 + 8);
  model.Place.aggregate([{ $sample: { size: randomAmount } }]).then((result) => {
    res.send(result);
  });
});

app.get('/api/savedlist', (req, res) => {
  model.SavedList.find().exec().then((result) => {
    res.send(result);
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening to port ${[port]}`);
});
