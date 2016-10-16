const React = require('react')

const Header = require('../containers/Header')
const Notes = require('../containers/Notes')

const NotificationBar = require('../containers/NotificationBar')

require('./scss/main.scss')

// Note: Props.children will almost always be ../containers/NoteView
module.exports = (props) => {
  return (<div>
  <NotificationBar />
  <Header />
  <Notes />
  {props.children}
</div>)
}
