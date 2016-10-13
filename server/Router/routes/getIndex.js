/**
 * Route for /, or, you know, index
 * @method getIndex
 * @param  {object} req - the express request object
 * @param  {object} res - the express response object
 */
const getIndex = function (req, res) {
  let { user } = req
  let { db } = req.app.locals

  db.User.where({_id: user._id}).findOne((err, dbUser) => {
    if (err) { return res.redirect('/error') }
    db.Note.where({_id: { $in: dbUser.notes }}).exec(function (err, notes) {
      if (err) { return res.redirect('/error') }
      let state = {
        user: user,
        notes: notes
      }
      res.render('app', {state})
    })
  })
}

module.exports = getIndex
