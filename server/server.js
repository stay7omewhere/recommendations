const express = require('express');
const path = require('path');
const port = 3000;
app = express();

app.use(require('morgan')('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + './../public'));

app.listen(port, ()=>{
  console.log(`Listening to port ${[port]}`);
});

