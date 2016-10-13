module.exports = function (db, user, done) {
  let { User } = db

  User.findOneAndUpdate(
    {userId: user.id},
    {$set: {userId: user.id, userName: user.displayName}},
    {upsert: true, new: true},
    done
  )
}
