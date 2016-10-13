const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema

var shortid = require('shortid')

var noteSchema = new Schema({
  creator: {type: ObjectId, ref: 'Creator'},
  text: {type: String },
  slug: {type: String, required: true, unique: true, 'default': shortid.generate},
})

module.exports = mongoose.model('Note', noteSchema)
