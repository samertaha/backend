const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'hellow backend' });
});

app.listen(3000);
