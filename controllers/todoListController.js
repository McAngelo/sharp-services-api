'use strict';

var mongoose = require('mongoose');
var Task = mongoose.model('Tasks');

// this gets all the task items
exports.list_all_tasks = function(req, res){
	console.log(req.body);
	Task.find({}, function(err, task){
		if(err){ res.send(err); }

		res.json(task);
	});
};

// this creates a single tasks
exports.create_a_task = function(req, res){
	console.log(req.body);
	var new_task = new Task(req.body);

	new_task.save(function(err, task){

		if(err){ res.send(err); }

		res.json(task);
	});
};

// this creates a single tasks
exports.read_a_task = function(req, res){
	console.log(req.params);
	Task.findById(req.params.taskid, function(err, task){
			if(err){ res.send(err); }

			res.json(task);
	});
};

// this creates a single tasks
exports.update_a_task = function(req, res){
	console.log(req.body);
	Task.findOneAndUpdate({ _id: req.params.taskid }, req.body, 
		{ new: true }, function(err, task){
			if(err) { res.send(err); }

			res.json(task);
		});
};

// this creates a single tasks
exports.delete_a_task = function(req, res){
	console.log(req.params);
 	Task.remove({ _id: req.params.taskid	},function(err, task){
 		if(err){ res.send(err); }

 		res.json({ message: "Task successfully deleted" })
 	});
 };