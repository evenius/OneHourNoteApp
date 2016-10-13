const _ = require('fast.js')

const session = require('express-session')
const bodyParser = require('body-parser')
const passport = require('passport')

const generateAuthStrategy = require('./authStrategy')
const serializeUser = require('./serializeUser')
const deserializeUser = require('./deserializeUser')

function bindAuth (app) {
  let { config, db } = app.locals

  // Start your session!
  app.use(session({secret: 'yepsecretwhatsup', resave: false, saveUninitialized: false}))

  // Set the passport middleware
  passport.use(generateAuthStrategy(config))
  passport.serializeUser(_.partial(serializeUser, db))
  passport.deserializeUser(deserializeUser)

  app.use(passport.initialize())
  app.use(passport.session())

  return app
}

module.exports = bindAuth
