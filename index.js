const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.HTTP_PORT || 8080;

app.get('/', (req, res, next) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
