const React = require('react')
const { connect } =  require('react-redux')
const capitalize = require('capitalize')

require('./scss/header.scss')

// Blindly adding 's to make it possessive? Apparently http://grammarist.com/style/last-names/
function Header ({user}) {
  return (<header>
    <h1>{capitalize.words(user.userName)}'s notes</h1>
  </header>)
}

module.exports = connect(({user}) => ({ user }))(Header)
