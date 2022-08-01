const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name : String,
    phone : Number,
    age : Number,
    place : String
})
module.exports = mongoose.model('person', schema);