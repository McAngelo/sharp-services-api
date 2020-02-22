'use strict';

const express = require('express');
const { 
	createProfile,
	profileDetails,
	uploadAvatar,
	sendHi,
	uploadProfileAvatar,
	updateProfile,
	deleteProfileAvatar,
	deleteProfile
} = require('../controllers/profileController');
const auth = require('../_middleware/auth');

const router = new express.Router();

router.post('/api/v1/profile', createProfile);

router.get('/api/v1/profile/greetings', sendHi);

router.get('/api/v1/profile', auth, profileDetails);

router.patch('/api/v1/profile', auth, updateProfile);

router.post('/api/v1/profile/forgotten-password', async (req, res) =>{
	res.status(200).send({
		status: res.statusCode,
		message: 'We are working on the forgotten password feature',
		data: { user, token }
	});
});

router.post('/api/v1/profile/reset', async (req, res) =>{
	res.status(200).send({
		status: res.statusCode,
		message: 'We are working on the reset password feature',
		data: { user, token }
	});
});

router.delete('/api/v1/profile', auth, deleteProfile);

router.post('/api/v1/profile/avatar', auth, uploadAvatar.single('avatar'), uploadProfileAvatar);

router.delete('/api/v1/profile/avatar', auth, deleteProfileAvatar);


module.exports = router;