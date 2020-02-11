const express = require('express');
const router = new express.Router();
const Task = require('../models/task');

/* Tasks routes start here */

router.get('/tasks', async (req, res) => {

	try{
		const tasks = await Task.find({});
		res.status(200).send(taks);
	}catch(err){
		res.status(500).send();
	}
});

router.get('/tasks/:id', async (req, res) => {

	const _id = req.params.id;

	try {
		const task = await Task.findById(_id);

		if(!task){
			return res.status(404).send('Task not found');
		}

		res.status(200).send(result);
	} catch(err) {
		console.log(err);
		res.status(500).send(err)
	}
});

router.post('/tasks', async (req, res) => {

	const task = new Task(req.body);

	try{
		await task.save();
		console.log(task);
		res.status(201).send(task);
	} catch (err){
		console.log(err);
		res.status(400).send(err);
	}
});

router.patch('/tasks/:id', async (req, res) => {
	const  _id = req.params.id;
	const bodyData = req.body;
	
	const  updates = Object.keys(req.body);
	const allowedUpdates = ['description', 'completed'];
	const isValidOperation = updates.eveery((update) => {
		return allowedUpdates.includes(update);
	});


	if(!isValidOperation){
		return res.status(400).send({ 'error': 'Invalid updates!' })
	}

	try {
		const task = await Task.findByIdAndUpdate(_id, bodyData, { new:true, runValidators: true });

		if(!task){
			return res.status(404).send();
		}
		res.status(200).send(task);
	} catch(err) {
		console.log(err);
		res.status(400).send(err);
	}
});

router.delete('/tasks/:id', async (req, res) => {
	const _id = req.params.id;

	try {
		const task = await User.findByIdAndDelete(req.params.id);

		if(!task){
			return res.status(404).send();
		}

		res.send(task);
	} catch(err) {
		// statements
		console.log(e);
		res.status(500).send();
	}
});

/* Tasks routes ends here*/

module.exports = router;