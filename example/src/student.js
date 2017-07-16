const mongoose = require('mongoose')
const Schema = mongoose.Schema
const studentSchema = new Schema({
    name : String,
    studentId : Number
})
const Student = mongoose.model('StudentInfo',studentSchema)
module.exports = Student