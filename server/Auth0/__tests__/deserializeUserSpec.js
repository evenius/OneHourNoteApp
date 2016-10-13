const { describe, it } = require('mocha')
const { expect } = require('chai')
const { spy } = require('sinon')

const deserializeUser = require('../deserializeUser')
const { db, WORKING, BROKEN } = require('../../mongo/__tests__/_stubbedGoose')

describe('user deserialization', function () {
  it('receives a user from... Auth0, and sets it for the session. App friendly.', function () {
    // setup
    let callback = spy()

    // exec
    deserializeUser({id: '123'}, callback)

    // assertions
    expect(callback.calledOnce).to.equal(true)
  })
})
