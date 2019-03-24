'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*var TaskSchema = new Schema({
	name:{
		type: String,
		required: 'Kindly enter the name of the task'
	},
	Created_date: {
		type: Date,
		default: Date.now
	},
	status: {
		type: [{
			type: String,
			enum: ['pending', 'ongoing', 'completed']
		}],
		default: ['pending']
	}
});

module.exports = mongoose.model('Tasks', TaskSchema);*/

var UserSchema = new Schema({
  email: {
    type: String, required: true,
    trim: true, unique: true,
    match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  },
  firstName: {type: String},
  lastName: {type: String}
});

module.exports = mongoose.model('Users', UserSchema); //defining model
//var User = require('mongoose').model('User'); //getting model