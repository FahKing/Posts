var mongoose = require('mongoose')
// Schema > โครงสร้างของข้อมูล
var Schema = mongoose.Schema
// schema object > new Schema(object, option)
var PostSchema = new Schema({
  title: String,
  description: String
});
// สร้าง Model เพื่อนำไปใช้ในการ Mongoose CRUD
// mongoose.model(name, schema)
var Post = mongoose.model('Post', PostSchema)
module.exports = Post
