const notes = require('./notes')
const notification = require('./notification')

module.exports = {
  ...notes,
  ...notification
}
