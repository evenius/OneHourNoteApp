/**
 * Route for DELETE /notes/:noteid
 * @method deleteNote
 * @param  {object} req - the express request object
 * @param  {object} res - the express response object
 */
const deleteNote = function (req, res) {
  let { user } = req
  let { db } = req.app.locals

  let slug = req.params.note
  // Just like that
  db.Note.remove({creator: user._id, slug}, (err, result) => {
    if (err) {
      return res.status(500).send('error')
    }
    return res.send('ok')
  })
}

module.exports = deleteNote
