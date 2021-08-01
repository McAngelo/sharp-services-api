'use strict';

let models = require('../models/index');
let User = require('../models/user');
const userService = require('../_helpers/user.service');
var apiResponse = new Object();

exports.authenticate = function(req, res, next){
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
};

exports.getAll = function(req, res, next){
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

// this gets all users
exports.get_all_Users = function (req, res, next) {
    models.User.findAll({

    }).then(function(users){
        res.statusCode = 200;
        apiResponse.status = res.statusCode;
        apiResponse.message = 'Successful';
        apiResponse.data = users;
        res.json(apiResponse);
    }).catch(function(err){
        res.statusCode = 400;
        apiResponse.status = res.statusCode;
        apiResponse.message = 'Error';
        apiResponse.data = err;
        res.json(apiResponse);
    });
};

// this allows a search users
var getOneUser = function (req, res) {
    res.json(req.user);
};

// this gets a user by ID
exports.get_user_by_id = function (req, res) {
    models.User.findOne({
        where: {
            id: req.params.userId
        }
    }).then(function(user){
        res.statusCode = 200;
        apiResponse.status = res.statusCode;
        apiResponse.message = 'Successful';
        apiResponse.data = user;
        res.json(apiResponse);
    }).catch(function(err){
        res.statusCode = 400;
        apiResponse.status = res.statusCode;
        apiResponse.message = 'Error';
        apiResponse.data = err;
        res.json(apiResponse);
    });
};

// this creates a new user
exports.create_a_user = function (req, res, next) {
    let user = req.body;
    console.log(user);
    models.User.create(user).then(function(user){
        res.statusCode = 200;
        apiResponse.status = res.statusCode;
        apiResponse.message = 'Successful';
        apiResponse.data = user;
        res.json(apiResponse);
    }).catch(function(err){
        res.statusCode = 400;
        apiResponse.status = res.statusCode;
        apiResponse.message = 'Error';
        apiResponse.data = err;
        res.json(apiResponse);
    });
};

// this updates a user's record
exports.update_a_user = function (req, res) {
    models.User.findOne({
        where: {
            id: req.params.userId
        }
    }).then(function(user){
        if(user){
            user.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                otherNames: req.body.otherNames,
                username: req.body.username,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                role: req.body.role,
            }).then(function(user){
                res.statusCode = 200;
                apiResponse.status = res.statusCode;
                apiResponse.message = 'Successful';
                apiResponse.data = user;
                res.json(apiResponse);
            });
        }else{
            res.statusCode = 404;
            apiResponse.status = res.statusCode;
            apiResponse.message = 'Error';
            apiResponse.data = "Sorry User does not exist";
            res.json(apiResponse);
        }
        
    }).catch(function(err){
        res.statusCode = 400;
            apiResponse.status = res.statusCode;
            apiResponse.message = 'Error';
            apiResponse.data = err;
            res.json(apiResponse);
    });
};

// this deletes a user's record
exports.delete_a_user = function (req, res, next) {
    models.User.destroy({
        where: {
            id: req.params.userId
        }
    }).then(function(user){
        res.statusCode = 200;
        apiResponse.status = res.statusCode;
        apiResponse.message = 'Successful';
        apiResponse.data = user;
        res.json(apiResponse);
    }).catch(function(err){
        res.statusCode = 400;
        apiResponse.status = res.statusCode;
        apiResponse.message = 'Error';
        apiResponse.data = err;
        res.json(apiResponse);
    });
};