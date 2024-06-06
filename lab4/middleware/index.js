// Example
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const { myLogger } = require('./myMiddleware.js');
// Middleware function myLogger
const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }

app.use(myLogger);

// Tiếp tục định nghĩa các route và middleware khác của ứng dụng của bạn ở đây...

  
app.listen(3007, () => {
    console.log('App is running on port 3000');
});

