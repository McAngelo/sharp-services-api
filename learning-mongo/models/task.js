const mongoose = require('mongoose');
const validator = require('validator');

const Tasks = mongoose.model('Tasks', {
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