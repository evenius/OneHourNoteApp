const mongoose = require('mongoose')

const Note = require('./models/Note')
const User = require('./models/User')

class Client {
  constructor (databaseUri, models) {
    for (var modelName in models) {
      if (models.hasOwnProperty(modelName)) {
        this[modelName] = models[modelName]
      }
    }
    mongoose.connect(databaseUri)
  }
}

const connect = function (databaseUri) {
  return new Client(databaseUri, {Note, User})
}

module.exports = connect
