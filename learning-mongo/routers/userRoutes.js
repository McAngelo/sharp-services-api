const express = require('express');
const User = require('../models/user');
//const auth = require('../middleware/auth');
const router = new express.Router();

//console.log(auth);

/* User Routes */
router.get('/users', async (req, res) => {

	try{
		const users = await User.find({});
		res.status(200).send(users);
	} catch (err){
		res.status(500).send(err);
	}

	/*User.find({}).then((result)=> {
		console.log(result);
		res.status(200).send(result)
	}).catch((error) => {
		console.log('Error!', error);
		res.status(400).send(error);
	});*/
});

router.get('/users/:id', async (req, res) => {

	const _id = req.params.id;

	try{
		const user = await User.findById(_id);

		if(!user){
			return res.status(404).send();
		}

		res.status(200).send(user);
	}catch(err){
		res.status(500).send();
	}

	/*User.findById(_id).then((result)=> {
		console.log(result);
		if(!result){
			return res.status(400).send('User not  found');
		}

		res.status(200).send(result);

	}).catch((error) => {
		console.log('Error!', error);
		res.status(500).send(error);
	});*/
});

router.post('/users', async (req, res) => {

	const user = new User(req.body);

	try{
		await user.save();
		const token = await user.generateAuthToken();
		console.log({ user, token });
		res.status(201).send({ user, token });
	} catch (err){
		console.log(err);
		res.status(400).send(err);
	}

	/*user.save().then(()=> {
		console.log(user);
		res.status(201).send(user)
	}).catch((error) => {
		console.log('Error!', error);
		res.status(400).send(error);
	});*/
});

router.post('/users/auth', async (req, res) => {
	try {
		const user = await User.findByIdCredentials(req.body.email, req.body.password);
		const token = await user.generateAuthToken();

		res.send({user, token});
	} catch(err) {
		// statements
		console.log(err);
		res.status(400).send();
	}
})

router.patch('/users/:id', async (req, res) => {
	const  _id = req.params.id;
	const bodyData = req.body;
	
	const updates = Object.keys(req.body);
	const allowedUpdates = ['name', 'email', 'password', 'age'];
	const isValidOperation = updates.eveery((update) => {
		return allowedUpdates.includes(update);
	});


	if(!isValidOperation){
		return res.status(400).send({ 'error': 'Invalid updates!' })
	}

	try {
		const user =  await User.findById(req.params.id);

		updates.forEach((update) =>{
			// statements
			user[update] = req.body[update];
		});
		await user.save();
		//const user = await User.findByIdAndUpdate(_id, bodyData, { new:true, runValidators: true });


		if(!user){
			return res.status(404).send();
		}
		res.status(200).send(user);
	} catch(err) {
		console.log(err);
		res.status(400).send(err);
	}
});

router.delete('/users/:id', async (req, res) => {
	const _id = req.params.id;

	try {
		const user = await User.findByIdAndDelete(req.params.id);

		if(!user){
			return res.status(404).send();
		}

		res.send(user);
	} catch(err) {
		// statements
		console.log(e);
		res.status(500).send();
	}
});
/*
const bcrypt = require('bcryptjs');

const myFunction =  async () => {
	const password = "Red12345!";
	const hashedPassword = await bcrypt.hash(password, 8);

	console.log(password);
	console.log(hashedPassword);

	const isMatch = await bcrypt.compare('red12345!', hashedPassword);
	console.log(isMatch);
}

const myFunctionTwo = async () => {
	const token = jwt.sign({ _id: 'abc123'}, 'thisismynewcourse',  { expiresIn: '7 days'});
	console.log(token);

	const data = jwt.verify(token, 'thisismynewcourse');
	console.log(data);
}*/

/* User routes ends here */

module.exports = router;