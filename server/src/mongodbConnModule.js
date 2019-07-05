var mongoose = require('mongoose')

module.exports.connect = function() {
	// var uri = 'mongodb://localhost:27017/posts'
	// mongoose.connect(uri, {useMongoClient: true})
	mongoose.connect('mongodb://localhost:27017/posts');
	var db = mongoose.connection;

	db.on('error', function(err){
		console.log('Mongoose error: ' + err);
	})
	db.on('connected', function(callback){
		console.log('Mongoose connected')
	})
	return db
}