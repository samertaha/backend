const express = require('express');
const app = express();
//samer comment
app.get('/', (req, res) => {
  res.json({ message: 'hellow salem from backend' });
});
// great change
app.listen(8000);
