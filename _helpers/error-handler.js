/*module.exports = errorHandler;
var apiResponse = new Object();

function errorHandler(err, req, res, next){
	if(typeof (err) === 'string'){
		// custom applicaiton error
		res.statusCode = 400;
		apiResponse.status = res.statusCode;
		apiResponse.message = err;
		//apiResponse.data = err;
		return res.json(apiResponse);
		//return res.status(400).json({ message: err });
	}

	if(err.name === 'UnauthorizedError'){
		// jwt authentication error
		res.statusCode = 401;
		apiResponse.status = res.statusCode;
		apiResponse.message = 'Invalid Token';
		//apiResponse.data = err;
		return res.json(apiResponse);
		//return res.status(401).json({ message: 'Invalid Token' });
	}

	// default to 500 server error
	res.statusCode = 500;
	apiResponse.status = res.statusCode;
	apiResponse.message = err.message;
	//apiResponse.data = transaction;
	return res.json(apiResponse);
	//return res.status(500).json({ message: err.message });
}*/