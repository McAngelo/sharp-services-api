'use strict';

let models = require('../models/index');
let User = require('../models/user');

const userService = require('../_helpers/user.service');

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
        res.json(users);
    }).catch(function(err){
        res.json(err);
    });
};

// this allows a search users
var getOneUser = function (req, res) {
    res.json(req.user);
};

// this gets a user by ID
exports.get_user_by_id = function (req, res) {
	console.log(req.params, req.params.userId);
    models.User.findOne({
        where: {
            id: req.params.userId
        }
    }).then(function(user){
        res.json(user);
    }).catch(function(err){
        res.json(err);
    });
};

// this creates a new user
exports.create_a_user = function (req, res, next) {
    var user = req.body;
    console.log(user);
    models.User.create(user).then(function(user){
        res.json(user);
    }).catch(function(err){
        res.json(err);
    })
};

// this updates a user's record
exports.update_a_user = function (req, res, next) {
    User.findByIdAndUpdate(req.body._id, req.body, {new: true}, function (err, user) {
        if (err) {
            next(err);
        } else {
            res.json(user);
        }
    });
};

// this deletes a user's record
exports.delete_a_user = function (req, res, next) {
    req.user.remove(function (err) {
        if (err) {
            next(err);
        } else {
            res.json(req.user);
        }
    });
};