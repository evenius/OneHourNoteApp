const { describe, it, before } = require('mocha')
const { expect } = require('chai')

const userReducer = require('../user')

describe('Redux - reduce notes!', function () {
  it('defaults to return an empty object', function () {
    let user = userReducer(null, {})
    expect(user).to.be.empty
    expect(user).to.be.an('object')
  })
})
