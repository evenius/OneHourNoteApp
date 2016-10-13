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
        console.log(err)
        return res.status(500).send('error')
      }
      db.User.findOneAndUpdate(
        { user },
        {$addToSet: {notes: note}},
        (err) => {
          if(err) {
            console.log(err)
            return res.status(500).send('error')
          }
          return res.send('ok')
        }
      )
    }
  )
}

module.exports = postNote
