'use strict';

var mongoose = require('mongoose');
var Transaction = mongoose.model('Transactions');

// this gets all the transaction items
exports.list_all_transactions = function(req, res){
	console.log(req.body);
	Transaction.find({}, function(err, transaction){
		if(err){ res.send(err); }

		res.json(transaction);
	});
};

// this creates a single transactions
exports.create_a_transaction = function(req, res){
	console.log(req.body);
	var new_transaction = new Transaction(req.body);

	new_transaction.save(function(err, transaction){

		if(err){ res.send(err); }

		res.json(transaction);
	});
};

// this creates a single transactions
exports.read_a_transaction = function(req, res){
	console.log(req.params);
	Transaction.findById(req.params.transaction_id, function(err, transaction){
			if(err){ res.send(err); }

			res.json(transaction);
	});
};

// this creates a single transactions
exports.update_a_transaction = function(req, res){
	console.log(req.body);
	Transaction.findOneAndUpdate({ _id: req.params.transaction_id }, req.body, 
		{ new: true }, function(err, transaction){
			if(err) { res.send(err); }

			res.json(transaction);
		});
};

// this creates a single transactions
exports.delete_a_transaction = function(req, res){
	console.log(req.params);
 	Transaction.remove({ _id: req.params.transaction_id },function(err, transaction){
 		if(err){ res.send(err); }

 		res.json({ message: "Transaction successfully deleted" })
 	});
 };