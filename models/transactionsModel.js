'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionsSchema = new Schema({
	transaction_id:{
		type: String,
		required: 'Generated transaction ID'
	},
	user_id:{
		type: String,
		required: 'Generated user ID'
	},
	transaction_type:{
		type: String,
		required: 'Credit or Debit info'
	},
	amount:{
		type: Number,
		required: 'Transaction amount'
	},
	transaction_title:{
		type: String,
		required: 'The title of the transaction'
	},
	transaction_description:{
		type: String,
	},
	transaction_status: {
		type: [{
			type: String,
			enum: ['deleted', 'active']
		}],
		default: ['active']
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	}
}, {
	timestamps: true
});

const Transactions = mongoose.model('Transactions', TransactionsSchema);

module.exports = Transactions;