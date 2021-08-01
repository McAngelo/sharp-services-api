'use strict';

var mongoose = require('mongoose');
var Transaction = {};//mongoose.model('Transactions');

var apiResponse = new Object();

// this gets all the transaction items
exports.list_all_transactions = function(req, res){
	console.log(req.body);
	Transaction.find({}, function(err, transaction){
		if(err){ 
			res.statusCode = 400;
			apiResponse.status = res.statusCode;
			apiResponse.message = err.message;
			apiResponse.data = err;
			res.json(apiResponse);
		}
		else{
			res.statusCode = 200;
			apiResponse.status = res.statusCode;
			apiResponse.message = "Success";
			apiResponse.data = transaction;
			res.json(apiResponse);
		}
		return;
	});
};

// this creates a single transactions
exports.create_a_transaction = function(req, res){
	console.log(req.body);
	var new_transaction = new Transaction(req.body);

	new_transaction.save(function(err, transaction){

		if(err){ 
			res.statusCode = 400;
			apiResponse.status = res.statusCode;
			apiResponse.message = err.message;
			apiResponse.data = err;
			res.json(apiResponse);
		}

		res.json(transaction);
	});
};

// this creates a single transactions
exports.read_a_transaction = function(req, res){
	//let apiResponse = new ApiResponse();
	Transaction.findById(req.params._id, function(err, transaction){
		if(err){ 
			res.statusCode = 400;
			apiResponse.status = res.statusCode;
			apiResponse.message = err.message;
			apiResponse.data = err;
			res.json(apiResponse); 
		}
		else if(!transaction){
			res.statusCode = 404;
			apiResponse.status = res.statusCode;
			apiResponse.message = "Transaction record not found";
			apiResponse.data = null;
			res.json(apiResponse);
		}else{
			res.statusCode = 200;
			apiResponse.status = res.statusCode;
			apiResponse.message = "Success";
			apiResponse.data = transaction;
			res.json(apiResponse);
		}
		return;
	});
};

// this creates a single transactions
exports.update_a_transaction = function(req, res){
	//console.log(req.params._id);
	//console.log(req.body);
	Transaction.findOneAndUpdate({ _id: req.params._id }, req.body, 
		{ new: true }, function(err, transaction){
			if(err) { res.send(err);}
			//console.log(transaction);
			res.json(transaction);
		});
};

// this creates a single transactions
exports.delete_a_transaction = function(req, res){
	console.log(req.params);
 	Transaction.remove({ _id: req.params._id },function(err, transaction){
 		if(err){ res.send(err); }

 		res.json({ message: "Transaction successfully deleted" })
 	});
 };