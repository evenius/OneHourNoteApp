const React = require('react')
const { Route, Router, browserHistory } = require('react-router')

const Header = require('../containers/Header')
const Notes = require('../containers/Notes')

// Note: Props.children will almost always be ../containers/NoteView
module.exports = (props) => {
  return (<div>
  <Header />
  <Notes />
  {props.children}
</div>)
}
