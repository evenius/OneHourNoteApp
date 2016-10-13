const express = require('express')
const bodyParser = require('body-parser')

const connectMongo = require('./mongo')
const { bindRoutes } = require('./Router')
const initAuth = require('./Auth0')

const app = express()

/**
 * Starts the server
 * @function
 * @param {integer} PORT - the port number used by the applicaiton. Should be same as the docker config.
 */
const startServer = function (config) {
  let db = connectMongo(config.database)
  app.locals.db = db
  app.locals.config = config

  app.use(initAuth)

  // Use the embeddedjs view engine
  app.set('view engine', 'ejs')
  //Support Json body
  app.use(bodyParser.json())
  // Set the routes
  bindRoutes(app)

  // aaand let's go!
  app.listen(config.nodePort, function () {
    console.log(`Proser is now listening on http://localhost:${config.nodePort}`)
  })
}

module.exports = { startServer }
