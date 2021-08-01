//mysql database connection
let dbConection = require('./_helpers/mysql_db_connection');
let User = require('../models/newUserModel');

// Create User
exports.create = function(req, res){
    // create a new instance of the Users model with request body
    dbConection.User.create({
        name: req.body.name,
        email: req.body.email
    }).then(function(user){
        res.json(user);
    })
}