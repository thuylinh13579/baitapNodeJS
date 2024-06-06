// birds.js

const express = require('express');
const router = express.Router();
// Middleware cụ thể cho router
const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now());
    next();
  };
  
  // Route home page
  router.get('/', (req, res) => {
    res.send('Birds home page');
  });
  
  // Route about page
  router.get('/about', (req, res) => {
    res.send('About birds');
  });
  
  // Sử dụng middleware cụ thể cho tất cả các route trong router
  router.use(timeLog);
  module.exports = router;
  const express = require('express');
const app = express();

// Tải router từ file birds.js
const birdsRouter = require('./birds');

// Gắn router vào ứng dụng tại đường dẫn cụ thể
app.use('/birds', birdsRouter);
