const React = require('react')
const { connect } = require('react-redux')
const { hideNotificationBar } = require('../actions')

require('./scss/notificationBar.scss')

const NotificationBar = ({message, callBack, type, onClick}) => {
  if (!message) { return null }
  return (
    <div className={'notificationBar ' + type}>
      <p>{message}</p>
      <button onClick={onClick}>ⓧ</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(hideNotificationBar())
  }
})

module.exports = connect((state) => ({...state.notification}), mapDispatchToProps)(NotificationBar)
