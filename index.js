const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world-1!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
