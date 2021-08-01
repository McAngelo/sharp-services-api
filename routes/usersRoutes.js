'use strict';

var router = require('express').Router();
var users = require('../controllers/usersController');

router.post('/authenticate', users.authenticate);
router.get('/system-users', users.getAll);

router.route('/users')
	.get(users.get_all_Users)
	.post(users.create_a_user);

router.route('/users/:userId')
	.get(users.get_user_by_id)
	.put(users.update_a_user)
	.delete(users.delete_a_user);

module.exports = router;