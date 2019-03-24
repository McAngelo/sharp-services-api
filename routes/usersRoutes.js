'use strict';

module.exports = function(app){

	var users = require('../controllers/usersController');

	app.route('/api/v1/users')
	  .get(users.get_all_Users)
	  .post(users.create_a_user);

	app.route('/api/v1/users/:userId')
	  .get(users.get_user_by_id)
	  .put(users.update_a_user)
	  .delete(users.delete_a_user);

	//app.param('userId', getByIdUser);

	//app.use('/api/v1', router);
}