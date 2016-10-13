const { describe, it } = require('mocha')
const { expect } = require('chai')
const { spy } = require('sinon')

const serializeUser = require('../serializeUser')
const { db, WORKING, BROKEN } = require('../../mongo/__tests__/_stubbedGoose')

describe('user serialization', function () {
  it('receives a user from... Auth0, and tries to save it', function () {
    // setup
    let callback = spy()
    // exec
    serializeUser(db(WORKING), {id: '123'}, callback)

    // assertions
    expect(db.User.findOneAndUpdate.calledOnce).to.equal(true)
    expect(callback.calledOnce).to.equal(true)
  })
})
