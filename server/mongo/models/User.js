const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema

var userSchema = new Schema({
  userId: { type: String, required: true, unique: true},
  userName: { type: String, required: true},
  notes: [{ type : ObjectId, ref: 'Note' }],
})
module.exports = mongoose.model('User', userSchema);
