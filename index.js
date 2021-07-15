#!/usr/bin/env node

const app = require('./server');
const port = process.env.PORT || 3000;
publicDir = process.argv[2] || __dirname + '/public',

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
})
