const express = require('express');
const app = express();
const port = 3002;

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

