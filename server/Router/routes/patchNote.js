/**
 * Route for /, or, you know, index
 * @method getIndex
 * @param  {object} req - the express request object
 * @param  {object} res - the express response object
 */
const patchNote = function (req, res) {
  let { user } = req
  let { db } = req.app.locals
  let slug = req.params.note

  db.Note.findOneAndUpdate(
    { creator: user._id, slug },
    {$set: req.body},
    (err, result) => {
      if (err) {
        console.log(err)
        return res.status(500).send('error')
      }
      return res.send('ok')
    }
  )
}

module.exports = patchNote
