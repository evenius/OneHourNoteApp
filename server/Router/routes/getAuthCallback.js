const passport = require('passport')

/**
 * Route for /, or, you know, index
 * @method getIndex
 * @param  {object} req - the express request object
 * @param  {object} res - the express response object
 */
const getAuthCallback = passport.authenticate('auth0', { successRedirect: '/', failureRedirect: '/login' })

module.exports = getAuthCallback
