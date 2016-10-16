const { HIDE_NOTIFICATION_BAR, SHOW_ERROR, SHOW_INFO } = require('../actions/notification')

const notification = (state, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return { message: action.message, type: 'error' }
    case SHOW_INFO:
      return { message: action.message, type: 'info' }
    case HIDE_NOTIFICATION_BAR:
      return { message: null, type: null }
  }
  return state || {}
}

module.exports = notification
