'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('Users');

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
    User.find(function (err, users) {
        if (err) {
            next(err);
        } else {
            res.json(users);
        }
    });
};

// this allows a search users
var getOneUser = function (req, res) {
    res.json(req.user);
};

// this gets a user by ID
exports.get_user_by_id = function (req, res, next, id) {
	console.log(req.params);
    User.findById({_id: req.params.userId}, function (err, user) {
        if (err) {
            next(err);
        } else {
            req.user = user;
            next();
        }
    });
};

// this creates a new user
exports.create_a_user = function (req, res, next) {
    var user = new User(req.body);

    user.save(function (err) {
        if (err) {
            next(err);
        } else {
            res.json(user);
        }
    });
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