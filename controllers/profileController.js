'use strict';

const multer = require('multer');
const sharp = require('sharp');
const User = require('../models/user');
const { 
	sendWelcomeEmail, 
	sendCloseAccountEmail, 
	sendHiEmail } = require('../_notifications/email_notifications/send_grid_account');

const createProfile = async (req, res) => {

	const user = new User(req.body);

	try{
		await user.save();
		await sendWelcomeEmail(user.email, user.name);

		const token = await user.generateAuthToken();
		//console.log({ user, token });
		res.status(201).send({ user, token });
	} catch (err){
		console.log(err);
		res.status(400).send(err);
	}
};

const profileDetails = async (req, res) => {

	try{
		res.status(200).send(req.user);
	} catch (err){
		res.status(500).send(err);
	}
};

const uploadAvatar = multer({
	limits: {
		fileSize: 1000000
	},
	fileFilter(req, file, cb){
		if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
			return cb(new Error('Please upload an image'))
		}

		cb(undefined, true);
	}
});

const sendHi = async (req, res) =>{
	sendHiEmail();
	res.send();
};

const uploadProfileAvatar = async (req, res) => {
	const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer();
	//req.user.avatar = req.file.buffer;
	req.user.avatar = buffer;
	await req.user.save();
	res.send();
}, (error, req, res, next) => {
	res.status(400).send({ error: error.message });
};

const updateProfile = async (req, res) => {
	const  _id = req.params.id;
	const bodyData = req.body;
	
	const updates = Object.keys(req.body);
	const allowedUpdates = ['name', 'email', 'password', 'age'];
	const isValidOperation = updates.every((update) => {
		return allowedUpdates.includes(update);
	});

	try {

		//console.log(req.user, req.body);
		updates.forEach((update) =>{
			// statements
			//console
			req.user[update] = req.body[update];
		});
		await req.user.save();
		//const user = await User.findByIdAndUpdate(_id, bodyData, { new:true, runValidators: true });

		res.status(200).send(req.user);
	} catch(err) {
		//console.log(err);
		res.status(400).send(err);
	}
};

const deleteProfileAvatar = async (req, res) => {
	req.user.avatar = undefined;
	await req.user.save();
	res.send();
};

const deleteProfile = async (req, res) => {
	//console.log(req.user)
	try {
		await req.user.remove();
		await sendCloseAccountEmail(req.user.email, req.user.name);
		res.send(req.user);
	} catch(err) {
		// statements
		console.log(err);
		res.status(500).send();
	}
};

module.exports = {
	createProfile,
	profileDetails,
	uploadAvatar,
	sendHi,
	uploadProfileAvatar,
	updateProfile,
	deleteProfileAvatar,
	deleteProfile
}