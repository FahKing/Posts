var mongoose = require('mongoose')
// Schema > โครงสร้างของข้อมูล
var Schema = mongoose.Schema
// schema object > new Schema(object, option)
var PostSchema = new Schema({
    filename: String,
    hash: String,
    fileid: Number,
    secretkey: String,
    nameupload: [],
    namedownload: [],
    namedelete: []
});
// สร้าง Model เพื่อนำไปใช้ในการ Mongoose CRUD
// mongoose.model(name, schema)
var Loadfile = mongoose.model('Loadfile', PostSchema)
module.exports = Loadfile
