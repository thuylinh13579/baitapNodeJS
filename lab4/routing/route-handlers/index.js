const express = require('express');
const app = express();

app.get('/example/a', (req, res) => {
  res.send('Hello from A!');
});

app.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...');
  next();
}, (req, res) => {
  res.send('Hello from B!');
});

const cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

const cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

app.get('/example/c', [cb0, cb1], (req, res) => {
  res.send('Hello from C!');
});

app.get('/example/d', [cb0, cb1], (req, res, next) => {
  console.log('the response will be sent by the next function ...');
  next();
}, (req, res) => {
  res.send('Hello from D!');
});

// Lắng nghe trên cổng 3002
app.listen(3002, () => console.log('Example app listening on port 3002!'));
