'use strict';

const express = require('express');

const { 
	login,
	forgottenPassword,
	resetPassword,
	emailVerification,
	logout,
	logoutAll
} = require('../controllers/guardController');

const auth = require('../_middleware/auth');

const router = new express.Router();

router.post('/api/v1/auth/login', login)

router.post('/api/v1/auth/forgotten-password', forgottenPassword);

router.post('/api/v1/auth/reset-password', resetPassword);

router.post('/api/v1/auth/email-verification', emailVerification);

router.post('/api/v1/auth/logout', auth, logout);

router.post('/api/v1/auth/logoutAll', auth, logoutAll);


module.exports = router;