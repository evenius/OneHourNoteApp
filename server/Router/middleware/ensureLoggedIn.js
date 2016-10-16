module.exports = function (req, res, next) {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    if (req.session) {
      // If Passport finds `returnTo` in session, it will automatically return user
      req.session.returnTo = req.originalUrl || req.url
    }
    // If expecting a json response, I decided it's from the client-API
    // in reality there's a lot of better ways to do this, but whatever, my API –
    // my rules
    if (req.get('Accept') === 'application/json') {
      return res.status(403).send('unauthorised, gotta log back in')
    }
    return res.redirect('/login')
  }
  next()
}
