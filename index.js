const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

dotenv.config();

const PORT = process.env.HTTP_PORT || 8080;

app.use(express.json());

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// public folder
app.use(express.static(path.join(path.dirname(require.main.filename), 'public')));

app.get('/', (req, res, next) => {
  res.render('index', {
    message: 'This is the test',
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
