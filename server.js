#!/usr/bin/env node
'use strict';
require('rootpath')();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('errorhandler');
const methodOverride = require('method-override');
const publicDir = process.argv[2] || __dirname + '/public';
const path = require('path');

const guardRouter = require('./routes/guardRoutes');
const profileRouter = require('./routes/profileRoutes');

// mongo database connection
require('./_helpers/db_connection');

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API landing page
app.get("/", function (req, res) {
  res.sendFile(path.join(publicDir, "/index.html"));
});

app.options('*', cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, PATCH, POST, GET, DELETE, OPTIONS');
  next();
});


app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(guardRouter);
app.use(profileRouter);

app.use(express.static(publicDir));

// global error handler
app.use(errorHandler);
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

module.exports = app;