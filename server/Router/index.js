const Express = require('express')
const { join } = require('path')

const getIndex = require('./routes/getIndex')
const getLogin = require('./routes/getLogin')
const postNote = require('./routes/postNote')
const patchNote = require('./routes/patchNote')
const deleteNote = require('./routes/deleteNote')
const getAuthCallback = require('./routes/getAuthCallback')

const ensureLoggedIn = require('./middleware/ensureLoggedIn')

/**
 * Bind all the above routes, it's not smart, but it's something
 * @method bindRoutes
 * @param  {object}   Router - Provided by Express.js
 * @return {object}            Same router, but now with the bound routes.
 */
function bindRoutes (app) {
  app.use('/src', Express.static(join(__dirname, '../../bin'), {maxage: 1}))

// Unsafe
  app.get('/authCallback', getAuthCallback)
  app.get('/login', getLogin)

// Totally, 100% safe/hackproof
  app.get('/', ensureLoggedIn, getIndex)
  app.get('/notes/:note', ensureLoggedIn, getIndex)

  app.post('/notes', ensureLoggedIn, postNote)
  app.patch('/notes/:note', ensureLoggedIn, patchNote)
  app.delete('/notes/:note', ensureLoggedIn, deleteNote)

  return app
}

module.exports = { bindRoutes }
