const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const contributeRouter = require('./routes/contribute');
const simulationsRouter = require('./routes/simulations');
const doublePendulum2D = require('./routes/doublePendulum2D');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/contribute', contributeRouter);
app.use('/simulations', simulationsRouter);
app.use('/simulations/doublePendulum2D', doublePendulum2D);

// Stylesheets
app.use(express.static(__dirname + '/public'));
module.exports = app;
