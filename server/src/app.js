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
  Post.find({}, 'title description', function (error, posts) {
    if (error) { console.error(error); }
    res.send({
      posts: posts
    }) 
  }).sort({_id:-1})
})

// var Data = require("../routes/getData")
// app.use('/postdata', Data)

// CREATE
// add to table_db
app.post('/add_post', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var new_post = new Post({
    title: title,
    description: description
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
	Post.findById(req.params.id, 'title description', function (error, post) {
	  if (error) { console.error(error); }
	  res.send(post)
	})
})

// // UPDATE => Put /posts by id
// // put a data to db
app.put('/posts/:id', (req, res) => {
	var db = req.db;
	Post.findById(req.params.id, 'title description', function (error, post) {
	  if (error) { console.error(error); }

	  post.title = req.body.title
	  post.description = req.body.description
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
