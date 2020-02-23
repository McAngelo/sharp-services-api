const jwt = require('jsonwebtoken');
const User = require('../models/usersModel');


const auth = async (req, res, next) => {
	//console.log('auth middleware', req.header);

	try {
		const token = req.header('Authorization').replace('Bearer ', '');
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
		//console.log(token);

		if(!user){
			throw new Error();
		}
		
		req.token = token;
		req.user = user;
		next();

	} catch(err) {
		// statements
		//console.log(err);
		res.status(401).send({error: 'Please authenticate.'})
	}

	//next();
}

module.exports = auth;