const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const defineAssociations = require('./model/Association');

const PORT = process.env.HTTP_PORT || 8080;

const courseRouter = require('./router/CourseRouter');
const userRouter = require('./router/UserRouter');

dotenv.config();

app.use(express.json());

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// public folder
app.use(express.static(path.join(path.dirname(require.main.filename), 'public')));

// router
app.use(courseRouter);
app.use(userRouter);

app.get('/', (req, res, next) => {
  res.render('index', {
    message: 'This is the test',
  });
});

defineAssociations();

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
