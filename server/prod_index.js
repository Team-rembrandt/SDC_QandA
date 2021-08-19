require('newrelic');
// setting up dependencies
const express = require('express');
let db = require('./db').db;
let router = require('./routes.js');
let compression = require('compression');
let bodyParser = require('body-parser');
const morgan = require('morgan');
const request = require('supertest');

const app = express();

module.exports.app = app;

app.use(compression());
// morgan can show us how long it takes to retrieve data from db
app.use(morgan('dev'));
// set port nuber
app.set('port', 3000);

// tells our application to accept incoming JSON body in requests
// (REST APIs communicate in JSON form)
app.use(express.json());

// set up our routes
app.use('/qa', router);

if(!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
