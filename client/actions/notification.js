const HIDE_NOTIFICATION_BAR = 'HIDE_NOTIFICATION_BAR'

const SHOW_ERROR = 'SHOW_ERROR'
const SHOW_INFO = 'SHOW_INFO'

const hideNotificationBar = () => {
  return {
    type: HIDE_NOTIFICATION_BAR
  }
}

const showError = (errorMessage) => {
  let message = (errorMessage instanceof Error ? errorMessage.message : errorMessage)
  return {
    type: SHOW_ERROR,
    message
  }
}

module.exports = {
  HIDE_NOTIFICATION_BAR,
  SHOW_ERROR,
  SHOW_INFO,
  hideNotificationBar,
  showError
}
