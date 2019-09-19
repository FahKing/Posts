var mongoose = require('mongoose')
// Schema > โครงสร้างของข้อมูล
var Schema = mongoose.Schema
// schema object > new Schema(object, option)
var PostSchema = new Schema({
  filename: String,
  hash: String,
  fileid: String,
  secretkey: String,
  nameupload: String,
  namedownload: String,
  namedelete: String
});
// สร้าง Model เพื่อนำไปใช้ในการ Mongoose CRUD
// mongoose.model(name, schema)
var Post = mongoose.model('Post', PostSchema)
module.exports = Post
