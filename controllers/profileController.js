'use strict';

const sharp = require('sharp');
const User = require('../models/user');

const createMyProfile = async (req, res) => {

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

const sendMyHi = async (req, res) =>{
	sendHiEmail();
	res.send();
};

const uploadMyProfileAvatar = async (req, res) => {
	const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer();
	//req.user.avatar = req.file.buffer;
	req.user.avatar = buffer;
	await req.user.save();
	res.send();
}, (error, req, res, next) => {
	res.status(400).send({ error: error.message });
};

const updateMyProfile = async (req, res) => {
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

const deleteMyProfileAvatar = async (req, res) => {
	req.user.avatar = undefined;
	await req.user.save();
	res.send();
};

const deleteMyProfile = async (req, res) => {
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
	createMyProfile,
	sendMyHi,
	uploadMyProfileAvatar,
	updateMyProfile,
	deleteMyProfileAvatar,
	deleteMyProfile
}