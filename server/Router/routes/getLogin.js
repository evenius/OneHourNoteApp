/**
 * Route for /, or, you know, index
 * @method getIndex
 * @param  {object} req - the express request object
 * @param  {object} res - the express response object
 */
const getIndex = function (req, res) {
  let { config } = req.app.locals
  let data = {
    Auth0ClientId: config.clientID,
    Auth0Domain: config.domain,
    Auth0Callback: config.callbackURL
  }
  res.render('login', data)
}

module.exports = getIndex
