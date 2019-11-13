require('newrelic');
const express = require('express');
const cors = require('cors');
const model = require('../database/index');
const db = require('../database/neo4jIndex');

const port = 3004;
const app = express();

app.use(require('morgan')('dev'));

app.use(cors());
app.use('/listing/:id', express.static('public'));

app.get('/api/nearbyPlaces/:id', (req, res) => {
  db.getRoom(req.params.id, 10, (error, result) => {
    if (error) {
      // console.log(error);
      res.status(500).send(error);
    } else {
      // console.log(result);
      res.status(200).send(result);
    }
  });
});

app.get('/api/savedList/:userid', (req, res) => {
  db.getSavedRooms(req.params.userid,(error,result) => {
    if(error) {
      // console.log(error);
      res.status(500).send(error);
    } else {
      // console.log(result);
      res.status(200).send(result);
    }
  });
});

app.post('/api/savedList/:roomid/:userid', (req,res) => {
  db.saveRoom(req.params.userid,req.params.roomid,(error,result) => {
    if(error) {
      // console.log(error);
      res.status(500).send(error);
    } else {
      // console.log(result);
      res.status(201).send(result);
    }
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening to port ${[port]}`);
});
