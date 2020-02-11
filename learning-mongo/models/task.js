const mongoose = require('mongoose');
const validator = require('validator');

const taskSchema = new mongoose.Schema({
	description: {
		type: String,
		require: true,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	}
});

const Tasks = mongoose.model('Tasks', taskSchema);

const task = new Tasks({
	description: 'Working on this task',
	completed: true
});

/*task.save().then(()=> {
	console.log(task);
}).catch(() => {
	console.log('Error!', error);
});*/

module.exports = Tasks;