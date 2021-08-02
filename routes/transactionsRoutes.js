'use strict';

var router = require('express').Router();
var transactions = require('../controllers/transactionsController');

// transactions Routes
router.route('/transactions')
	.get(transactions.list_all_transactions)
	.post(transactions.create_a_transaction);

router.route('/transaction/:userId/:transactionId')
	.get(transactions.get_transaction_by_userId_and_transactionId)
	.put(transactions.update_user_transaction)
	.delete(transactions.delete_user_transaction);

router.route('/transaction/:userId')
	.get(transactions.list_all_transactions_by_userId);

module.exports = router;