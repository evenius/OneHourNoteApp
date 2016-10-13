/**
 * Route for /, or, you know, index
 * @method getIndex
 * @param  {object} req - the express request object
 * @param  {object} res - the express response object
 */
const getIndex = function (req, res) {
  let { user } = req
  let { db } = req.app.locals

  db.User.where({_id: user._id}).populate('notes').findOne((err, user) => {
    if (err) { console.log(err); res.redirect('/error') }
    let state = {
      user: user
    }
    res.render('app', {state})
  })
}

module.exports = getIndex
