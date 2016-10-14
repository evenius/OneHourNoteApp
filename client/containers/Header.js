const React = require('react')
const { connect } =  require('react-redux')

require('./scss/header.scss')

function Header ({user}) {
  return (<header><h1>{user.userName}'s notes</h1></header>)
}

module.exports = connect(({user}) => ({ user }))(Header)
