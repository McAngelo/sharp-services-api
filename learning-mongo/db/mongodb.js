// CRUD create read update delete operations

//const mongodb = require('mongodb');
//const MongoClient  = mongodb.MongoClient;

const { MongoClient, ObjectID } =  require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task_manager';
const id = new ObjectID();

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true  }, (error, client) => {
	if(error){
		return console.log('Unable to connect to database!')
	}

	console.log('Connected correctly');

	const db = client.db(databaseName);

	/*db.collection('users').insertOne({
		name: 'Michael Kwame Johnson',
		age: 32
	}, (error, result) => {
		if(error){
			return console.log('Unable to insert user info');
		}

		console.log(result.ops);
	})*/

	/*db.collection('users').insertMany([
		{
			name: 'Kofi Manu',
			age: 28
		},
		{
			name: 'Li Wyne',
			age: 26
		}
	], (error, result) => {
		if(error){
			return console.log('Unable to insert users records');
		}

		console.log(result.ops);
	})*/

	/*db.collection('tasks').insertMany([
		{
			description: 'Learn the preceeding modules',
			completed: true
		},
		{
			description: 'Learn the  current module',
			completed: false
		},
		{
			description: 'Completed the task',
			completed: true
		}
	], (error, result) => {
		if(error){
			return console.log('Unable to insert users records');
		}

		console.log(result.ops);
	})*/

	/*db.collection('users').findOne({ name: 'Li Wyne' }, (error, user) => {
		if(error){
			return console.log('Unable to fetch');
		}

		console.log(user)
	});

	db.collection('users').find({ age: 32}).toArray((error, users)=> {
		if(error){
			return console.log('Unable to fetch');
		}

		console.log(users)
	});

	db.collection('users').find({ age: 32}).count((error, count)=> {
		if(error){
			return console.log('Unable to fetch');
		}

		console.log(count)
	});*/

	/*db.collection('tasks').findOne({ _id: ObjectID('5e400ed6d7f21880dcce6955')}, (error, user) => {
		if(error){
			return console.log(error);
		}

		console.log(user);
	});

	db.collection('tasks').find({ completed: true }).count( (error, count) =>{
		if(error){
			return console.log(error);
		}

		console.log(count);
	});*/

	/*const updatePromise = db.collection('users').updateOne({
		_id: new ObjectID('5e4007371956287df1ee56cb')
	},{
		$set: {
			name: 'Emmanuel Johnson'
		},
		$inc: {
			age: 1
		}
	});

	updatePromise.then((result) => {
		console.log(result);
	}).catch((error)=>{
		console.log(error);
	});*/

	/*db.collection('tasks').updateMany({
		completed: false
	},{
		$set:{
			completed:true
		}
	}).then((result)=>{
		console.log(result);
	}).catch((error)=>{
		console.log(error);
	});
	*/

	/*db.collection('users').deleteMany({
		age:26
	}).then((result)=>{
		console.log(result);
	}).catch((error)=>{
		console.log(error);
	});

	db.collection('tasks').deleteOne({
		_id: new ObjectID('5e400ed6d7f21880dcce6955')
	}).then((result)=>{
		console.log(result);
	}).catch((error)=>{
		console.log(error);
	});*/

})