const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined')) // ให้ app(express) ใช้งานการ morgam module
app.use(bodyParser.json())  // ให้ app(express) ใช้งานการ parse json
app.use(cors()) // ให้ app(express) ใช้งานการ cors module

const mongodb_conn_module = require('./mongodbConnModule')
var db = mongodb_conn_module.connect()
// begin performing our CRUD operations
var Post = require('../models/post')

// READ
// get data db
app.get('/posts', (req, res) => {
  Post.find({}, 'filename hash fileid secretkey nameupload namedownload namedelete', function (error, posts) {
    if (error) { console.error(error); }
    res.send({
      posts: posts
    }) 
  }).sort({_id:-1})
})

// CREATE
// add to table_db
app.post('/add_post', (req, res) => {
  var db = req.db;
  var filename = req.body.filename;
  var hash = req.body.hash;
  var fileid = req.body.fileid;
  var secretkey = req.body.secretkey;
  var nameupload = req.body.nameupload;
  var namedownload = req.body.namedownload;
  var namedelete = req.body.namedelete

  var new_post = new Post({
    filename: filename,
	hash: hash,
	fileid: fileid,
	secretkey: secretkey,
	nameupload: nameupload,
	namedownload: namedownload,
	namedelete: namedelete
  })
  new_post.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true
    })
  })
})

// // UPDATE => Get /post by id
// //Fetch single post 
app.get('/post/:id', (req, res) => {
	var db = req.db;
	Post.findById(req.params.id, 'filename hash fileid secretkey nameupload namedownload namedelete', function (error, post) {
	  if (error) { console.error(error); }
	  res.send(post)
	})
})
// // UPDATE => Put /posts by id
// // put a data to db
app.put('/posts/:id', (req, res) => {
	var db = req.db;
	Post.findById(req.params.id, 'filename hash fileid secretkey nameupload namedownload namedelete', function (error, post) {
	  if (error) { console.error(error); }
	  post.filename = req.body.filename
	  post.hash = req.body.hash
	  post.fileid = req.body.fileid
	  post.secretkey = req.body.secretkey
	  post.nameupload = req.body.nameupload
	  post.namedownload = req.body.namedownload
	  post.namedelete = req.body.delete

	  post.save(function (error) {
			if (error) {
				console.log(error)
			}
			res.send({
				success: true
			})
		})
	})
})

// // DELETE /posts by id
app.delete('/posts/:id', (req, res) => {
	var db = req.db;
	Post.remove({
		_id: req.params.id
	}, function(err, post){
		if (err)
			res.send(err)
		res.send({
			success: true
		})
	})
})

console.log('lishening to require on port 5000');
app.listen(process.env.PORT || 5000);
