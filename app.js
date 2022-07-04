const express = require('express');
const app = express();
//samer comment
app.get('/', (req, res) => {
  res.json({ message: 'hellow samer from backend' });
});
// great change
app.listen(3000);
