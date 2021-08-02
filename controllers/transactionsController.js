'use strict';

let models = require('../models/index');
let Transactions = require('../models/transactions');
const userService = require('../_helpers/user.service');

var apiResponse = new Object();

// this gets all the transaction items
exports.list_all_transactions = function(req, res){

	models.Transactions.findAll({ }).then(function(transactions){
        res.statusCode = 200;
        apiResponse.status = res.statusCode;
        apiResponse.message = 'Successful';
        apiResponse.data = transactions;
        res.json(apiResponse);
    }).catch(function(err){
        res.statusCode = 400;
        apiResponse.status = res.statusCode;
        apiResponse.message = 'Error';
        apiResponse.data = err;
        res.json(apiResponse);
    });
};

// this gets all the transaction items by the userId
exports.list_all_transactions_by_userId = function(req, res){
	models.Transactions.findAll({ 
		where: {
            user_id: req.params.userId
        }
	}).then(function(transactions){
        res.statusCode = 200;
        apiResponse.status = res.statusCode;
        apiResponse.message = 'Successful';
        apiResponse.data = transactions;
        res.json(apiResponse);
    }).catch(function(err){
        res.statusCode = 400;
        apiResponse.status = res.statusCode;
        apiResponse.message = 'Error';
        apiResponse.data = err;
        res.json(apiResponse);
    });
};

// this gets a transaction detail by ID
exports.get_transaction_by_userId_and_transactionId = function (req, res) {
    models.Transactions.findOne({
        where: {
            user_id: req.params.userId,
			id: req.params.transactionId
        }
    }).then(function(transaction){
        res.statusCode = 200;
        apiResponse.status = res.statusCode;
        apiResponse.message = 'Successful';
        apiResponse.data = transaction;
        res.json(apiResponse);
    }).catch(function(err){
        res.statusCode = 400;
        apiResponse.status = res.statusCode;
        apiResponse.message = 'Error';
        apiResponse.data = err;
        res.json(apiResponse);
    });
};

// this creates a single transactions
exports.create_a_transaction = function(req, res){

	let transaction = req.body;
    console.log(transaction);
    models.Transactions.create(transaction).then(function(transaction){
        res.statusCode = 200;
        apiResponse.status = res.statusCode;
        apiResponse.message = 'Successful';
        apiResponse.data = transaction;
        res.json(apiResponse);
    }).catch(function(err){
        res.statusCode = 400;
        apiResponse.status = res.statusCode;
        apiResponse.message = 'Error';
        apiResponse.data = err;
        res.json(apiResponse);
    });
};

// this update a single transactions
exports.update_user_transaction = function(req, res){
	models.Transactions.findOne({
        where: {
            user_id: req.params.userId,
			id: req.params.transactionId
        }
    }).then(function(transaction){
        if(transaction){
            transaction.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                otherNames: req.body.otherNames,
                username: req.body.username,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                role: req.body.role,
            }).then(function(transaction){
                res.statusCode = 200;
                apiResponse.status = res.statusCode;
                apiResponse.message = 'Successful';
                apiResponse.data = transaction;
                res.json(apiResponse);
            });
        }else{
            res.statusCode = 404;
            apiResponse.status = res.statusCode;
            apiResponse.message = 'Error';
            apiResponse.data = "Sorry transaction does not exist";
            res.json(apiResponse);
        }
        
    }).catch(function(err){
        res.statusCode = 400;
            apiResponse.status = res.statusCode;
            apiResponse.message = 'Error';
            apiResponse.data = err;
            res.json(apiResponse);
    });
};


// this delete a single transactions
exports.delete_user_transaction = function(req, res){

	 models.Transaction.destroy({
        where: {
            user_id: req.params.userId,
			id: req.params.transactionId
        }
    }).then(function(transaction){
        res.statusCode = 200;
        apiResponse.status = res.statusCode;
        apiResponse.message = 'Successful';
        apiResponse.data = transaction;
        res.json(apiResponse);
    }).catch(function(err){
        res.statusCode = 400;
        apiResponse.status = res.statusCode;
        apiResponse.message = 'Error';
        apiResponse.data = err;
        res.json(apiResponse);
    });
 };