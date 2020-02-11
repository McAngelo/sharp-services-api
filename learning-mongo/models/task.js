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

module.exports = Tasks;