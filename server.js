#!/usr/bin/env node
'use strict';

var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    mongoose = require('mongoose'),
    Task = require('./models/todoListModel'), // created model loading here
    User = require('./models/usersModel'), // created model loading here
    Transactions = require('./models/transactionsModel'), // created model loading here
    hostname = process.env.HOSTNAME || 'localhost',
    port = parseInt(process.env.PORT, 10) || 8080,
    publicDir = process.argv[2] || __dirname + '/public',
    path = require('path');

const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/config/config.js`)[env];

console.log(config);

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//mongoose.set('useFindAndModify', false);

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.connect(`mongodb://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`, { useNewUrlParser: true });


app.get("/", function (req, res) {
  res.sendFile(path.join(publicDir, "/index.html"));
});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

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
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

console.log(`Simple static server showing ${publicDir} listening at http://${hostname}:${port}`);
app.listen(port, hostname);
