const express = require('express');
const app = express();
const port = process.env.PORT || 3000

require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

app.use(express.json());

app.post('/users', (req, res) => {

	const user = new User(req.body);

	user.save().then(()=> {
		console.log(user);
		res.status(200).send(user)
	}).catch((error) => {
		console.log('Error!', error);
		res.status(400).send(error);
	});
});

app.post('/tasks', (req, res) => {

	const task = new Task(req.body);

	task.save().then(()=> {
		console.log(task);
		res.status(200).send(task)
	}).catch((error) => {
		console.log('Error!', error);
		res.status(400).send(error);
	});
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
})