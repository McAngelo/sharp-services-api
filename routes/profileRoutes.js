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




router.post('/profile', createProfile);

router.get('/profile/greetings', sendHi);

router.get('/profile', auth, profileDetails);

router.post('/profile/avatar', auth, uploadAvatar.single('avatar'), uploadProfileAvatar);

router.delete('/profile/avatar', auth, deleteProfileAvatar);

router.patch('/profile', auth, updateProfile);

router.delete('/profile', auth, deleteProfile);


module.exports = router;