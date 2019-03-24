'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
public transaction_id?:string,
        public user_id?: string,
        public transaction_type?: string, //credit / debit
        public amount?: number,
        public transaction_title?: string,
        public transaction_description?: string,
        public transaction_status?: boolean, //0 deleted / 1 not deleted
        public transaction_created_by?: number,
        public transaction_date_created?: any,
        public transaction_updated_by?: number,
        public transaction_date_updated?: any
*/

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
	transaction_created_by:{
		type: Number,
		required: 'User who created the transaction'
	},
	transaction_date_created: {
		type: Date //,
		//default: Date.now
	},
	transaction_updated_by:{
		type: Number,
		//required: 'Transaction amount'
	},
	transaction_date_updated: {
		type: Date,
		//default: Date.now
	}
});

module.exports = mongoose.model('Transactions', TransactionsSchema);