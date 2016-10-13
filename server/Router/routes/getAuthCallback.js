/**
 * Route for /, or, you know, index
 * @method getIndex
 * @param  {object} req - the express request object
 * @param  {object} res - the express response object
 */
const getIndex = function (req, res) {
  let { user } = req
  let { Author } = req.app.locals.db

  let render = (err, user) => {
    if(err) { console.log(err) }
    console.log(user)
    let state = {
      auth: {isAuthed: !!user},
      poem: null,
      user
    }

    res.render('app', {
      renderedHtml: preactRenderToString(''),
      state: state
    })
  }

  if (user){
    Author.where({ _id: user._id }).populate('poems').findOne(render)
  } else {
    render()
  }
}

module.exports = getIndex
