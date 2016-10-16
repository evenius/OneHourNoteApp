const email = require('email-validator')

module.exports = function (user, done) {
  // Wow!
  let name = user.userName
  if(email.validate(name)) {
    let newDisplayName = name.slice(0, name.indexOf('@')).replace(/(\.|\-|\_)/g, ' ')
      user.userName = newDisplayName
  }
  done(null, user)
}
