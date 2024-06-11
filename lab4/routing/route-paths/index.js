const express = require('express');
const app = express();
const port = 3004;

app.get('/about', (req, res) => {
  res.send('about');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
