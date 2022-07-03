const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'hellow samer from backend' });
});

app.listen(8000);
