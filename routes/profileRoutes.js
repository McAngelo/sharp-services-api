'use strict';

const express = require('express');
const { 
	createProfile,
	profileDetails,
	uploadAvatar,
	sendHi,
	uploadProfileAvatar,
	changePassword,
	updateProfile,
	deleteProfileAvatar,
	deleteProfile
} = require('../controllers/profileController');
const auth = require('../_middleware/auth');

const router = new express.Router();

router.post('/api/v1/profile', createProfile);

router.get('/api/v1/profile/greetings', sendHi);

router.get('/api/v1/profile', auth, profileDetails);

router.patch('/api/v1/profile/change-password', auth, changePassword);

router.patch('/api/v1/profile', auth, updateProfile);

router.delete('/api/v1/profile', auth, deleteProfile);

router.post('/api/v1/profile/avatar', auth, uploadAvatar.single('avatar'), uploadProfileAvatar);

router.delete('/api/v1/profile/avatar', auth, deleteProfileAvatar);


module.exports = router;