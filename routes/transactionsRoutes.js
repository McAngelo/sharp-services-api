'use strict';

module.exports = function(app){
	var transactions = require('../controllers/transactionsController');

	// transactions Routes
	app.route('/api/v1/transactions')
		.get(transactions.list_all_transactions)
		.post(transactions.create_a_transaction);



	app.route('/api/v1/transactions/:transactionid')
		.get(transactions.read_a_transaction)
		.put(transactions.update_a_transaction)
		.delete(transactions.delete_a_transaction);
};