#!/usr/bin/env node
'use strict';
require('rootpath')();
var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    Task = require('./models/todoListModel'), // created model loading here
    User = require('./models/usersModel'), // created model loading here
    Transactions = require('./models/transactionsModel'), // created model loading here
    hostname = process.env.HOSTNAME || 'localhost',
    port = parseInt(process.env.PORT, 10) || 8080,
    publicDir = process.argv[2] || __dirname + '/public',
    path = require('path');

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

// use JWT auth to secure the api
//app.use(jwt());

// working with todo routes
var todoRoutes = require('./routes/todoListRoutes'); // importing route
todoRoutes(app);

// working with todo routes
var userRoutes = require('./routes/usersRoutes'); // importing route
userRoutes(app);

// working with todo routes
var transactionListRoutes = require('./routes/transactionsRoutes'); // importing route
transactionListRoutes(app);


app.use(express.static(publicDir));

// global error handler
app.use(errorHandler);
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

console.log(`Simple static server showing ${publicDir} listening at http://${hostname}:${port}`);
app.listen(port);
