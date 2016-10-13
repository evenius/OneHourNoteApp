/**
 * Route for /, or, you know, index
 * @method getIndex
 * @param  {object} req - the express request object
 * @param  {object} res - the express response object
 */
const postNote = function (req, res) {
  let { user } = req
  let { db } = req.app.locals

  let newNote = {
    creator: req.user,
    text: req.body.text
  }

  db.Note.create(
    newNote,
    (err, note) => {
      if (err) {
        res.status(500).send('error')
      } else {
        db.User.findOneAndUpdate(
          { _id: user._id },
          {$addToSet: {notes: note}},
          (err, result) => {
            if (err) {
              res.status(500).send('error')
            } else {
              // Res.json returns empty for some reason
              res.set('Content-Type', 'application/json')
              res.send(JSON.stringify({ slug: note.slug }))
            }
          }
        )
      }
    }
  )
}

module.exports = postNote
