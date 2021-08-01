'use strict';

var router = require('express').Router();
var transactions = require('../controllers/transactionsController');

// transactions Routes
router.route('/api/v1/transactions')
	.get(transactions.list_all_transactions)
	.post(transactions.create_a_transaction);

router.route('/api/v1/transactions/:transactionId')
	.get(transactions.read_a_transaction)
	.put(transactions.update_a_transaction)
	.delete(transactions.delete_a_transaction);

module.exports = router;