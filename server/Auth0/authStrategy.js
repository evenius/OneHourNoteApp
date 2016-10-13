const Auth0Strategy = require('passport-auth0');

module.exports = function (conf) {
  let strategy = new Auth0Strategy(conf, function (accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile)
  })

  return strategy
}
