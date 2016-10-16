const { describe, it, before } = require('mocha')
const { expect } = require('chai')

const notificationReducer = require('../notification')
const { HIDE_NOTIFICATION_BAR, SHOW_ERROR, SHOW_INFO } = require('../../actions')

describe('Redux - reduce notes!', function () {
  var notification
  before(function () {
    notification = null
  })
  it('defaults to return an empty object', function () {
    notification = notificationReducer(null, {})
    expect(notification).to.be.empty
    expect(notification).to.be.an('object')
  })
  it('returns a notification error object', function () {
    // setup
    let action = {
      type: SHOW_ERROR,
      message: 'Oh no'
    }
    notification = notificationReducer(notification, action)
    // exec
    expect(notification).to.not.be.empty
    expect(notification).to.be.an('object')
    expect(notification.message).to.equal(action.message)
    expect(notification.type).to.equal('error')
  })
  it('returns a notification info object', function () {
    // setup
    let action = {
      type: SHOW_INFO,
      message: 'Oh yes'
    }
    notification = notificationReducer(notification, action)
    // exec
    expect(notification).to.not.be.empty
    expect(notification).to.be.an('object')
    expect(notification.message).to.equal(action.message)
    expect(notification.type).to.equal('info')
  })
  it('removes all object properties', function () {
    let action = {
      type: HIDE_NOTIFICATION_BAR
    }

    notification = notificationReducer(notification, action)

    Object.keys(notification).forEach(function (key) {
      let property = notification[key]
      expect(property).to.equal(null)
    })
  })
})
