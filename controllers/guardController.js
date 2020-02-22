'use strict';

const express = require('express');
const User = require('../models/usersModel');

const router = new express.Router();

const login = async (req, res) => {
	try {
		const user = await User.findByIdCredentials(req.body.email, req.body.password);
		const token = await user.generateAuthToken();

		res.send({user, token});
	} catch(err) {
		// statements
		res.status(400).send({
			status: res.statusCode,
			message: err.message
		});
	}
}

const logout = async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((token) => {
			return token.token !== req.token;
		});

		await req.user.save();

		res.send();
	} catch(err) {
		res.status(500).send({
			status: res.statusCode,
			message: err.message
		});
	}
};

const logoutAll = async (req, res) => {
	try {
		req.user.tokens = [];

		await req.user.save();

		res.send();
	} catch(err) {
		res.status(500).send({
			status: res.statusCode,
			message: err.message
		});
	}
};

module.exports = {
	login,
	logout,
	logoutAll
}