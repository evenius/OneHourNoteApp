// They are called 'template strings' for a reason. I think.

module.exports = (req, res) => {
  res.status(500).send(
  `<h1 style="text-align:center; font-family:menlo, Consolas, 'Courier new' monotype;">
    Oh damn, something went wrong
  </h1>
  <a href='${req.get('Referrer') || '/'}' style='text-align:center;'>Go back</a>
  `)
}
