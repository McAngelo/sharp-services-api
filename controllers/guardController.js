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
		res.status(400).send({
			status: res.statusCode,
			message: err.message
		});
	}
}

const forgottenPassword = async (req, res) =>{
	res.status(200).send({
		status: res.statusCode,
		message: 'We are working on the forgotten password feature'
	});
};

const resetPassword = async (req, res) =>{
	res.status(200).send({
		status: res.statusCode,
		message: 'We are working on the reset password feature'
	});
};

const emailVerification = async (req, res) =>{
	res.status(200).send({
		status: res.statusCode,
		message: 'We are working on the email verification feature'
	});
};

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
	forgottenPassword,
	resetPassword,
	emailVerification,
	logout,
	logoutAll
}