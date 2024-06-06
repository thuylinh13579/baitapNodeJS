const express = require('express');
const app = express();

// Đường dẫn chính với phương thức GET
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

// Đường dẫn chính với phương thức POST
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

// Route sử dụng app.all để xử lý mọi phương thức cho đường dẫn /secret
app.all('/secret', (req, res, next) => {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
}, (req, res) => {
  res.send('Secret section');
});

// Các route khác
app.get('/about', (req, res) => {
  res.send('about');
});

app.get('/random.text', (req, res) => {
  res.send('random.text');
});

app.get('/ab?cd', (req, res) => {
  res.send('ab?cd');
});

app.get('/ab+cd', (req, res) => {
  res.send('ab+cd');
});

app.get('/ab*cd', (req, res) => {
  res.send('ab*cd');
});

app.get('/ab(cd)?e', (req, res) => {
  res.send('ab(cd)?e');
});

app.get(/a/, (req, res) => {
  res.send('/a/');
});

app.get(/.*fly$/, (req, res) => {
  res.send('/.*fly$/');
});

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params);
});

// Lắng nghe trên cổng 3000
app.listen(3001, () => console.log('Example app listening on port 3001!'));
