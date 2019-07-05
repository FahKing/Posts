// const express = require('express'), 
// data = express.Router(),
// cors = require('cors')
// // morgan = require('morgan')

// // const app = express()

// // app.use(morgan('combined'))
// // app.use(bodyParser.json()) 
// data.use(cors())


// // const mongodb_conn_module = require('../src/mongodbConnModule')
// // var db = mongodb_conn_module.connect()

// var Post = require('../models/post')

// // READ
// // get data db
// data.get('/posts', (req, res) => {
//     Post.find({}, 'title description', function (error, posts) {
//       if (error) { console.error(error); }
//       res.send({
//         posts: posts
//       }) 
//     }).sort({_id:-1})
// })

// data.post('/add_post', (req, res) => {
//     var db = req.db;
//     var title = req.body.title;
//     var description = req.body.description;
//     var new_post = new Post({
//       title: title,
//       description: description
//     })
  
//     new_post.save(function (error) {
//       if (error) {
//         console.log(error)
//       }
//       res.send({
//         success: true
//       })
//     })
//   })
  
//   // UPDATE => Get /post by id
//   //Fetch single post 
//   data.get('/post/:id', (req, res) => {
//       var db = req.db;
//       Post.findById(req.params.id, 'title description', function (error, post) {
//         if (error) { console.error(error); }
//         res.send(post)
//       })
//   })
  
//   // UPDATE => Put /posts by id
//   // put a data to db
//   data.put('/posts/:id', (req, res) => {
//       var db = req.db;
//       Post.findById(req.params.id, 'title description', function (error, post) {
//         if (error) { console.error(error); }
  
//         post.title = req.body.title
//         post.description = req.body.description
//         post.save(function (error) {
//               if (error) {
//                   console.log(error)
//               }
//               res.send({
//                   success: true
//               })
//           })
//       })
//   })
  
//   // DELETE /posts by id
//   data.delete('/posts/:id', (req, res) => {
//       var db = req.db;
//       Post.remove({
//           _id: req.params.id
//       }, function(err, post){
//           if (err)
//               res.send(err)
//           res.send({
//               success: true
//           })
//       })
//   })
  
// module.exports = data;