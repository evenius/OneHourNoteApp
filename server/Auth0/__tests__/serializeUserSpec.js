const { describe, it } = require('mocha')
const { expect } = require('chai')
const { spy } = require('sinon')

const serializeUser = require('../serializeUser')
const { db, WORKING, BROKEN } = require('../../mongo/__tests__/_stubbedGoose')

describe('user serialization', function () {
  it('receives a user from... Auth0, and tries to save it', function () {
    // setup
    let callback = spy()
    let mockDb = db(WORKING)
    // exec
    serializeUser(mockDb, {id: '123'}, callback)

    // assertions
    expect(mockDb.User.findOneAndUpdate.calledOnce).to.equal(true)
    expect(callback.calledOnce).to.equal(true)
  })
})
