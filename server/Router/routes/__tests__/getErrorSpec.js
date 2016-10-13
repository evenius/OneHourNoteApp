const { describe, it } = require('mocha')
const { expect } = require('chai')

const getError = require('../getError')
const { mockRouteArgs } = require('./_mockResReq')

describe('GET ERROR ⚠️', function () {
  it('can sends an error to the user', function () {
    // Setup
    let {req, res} = mockRouteArgs()

    // Exec
    getError(req, res)

    // Assert
    expect(res.status.calledWith(500)).to.equal(true)
    expect(res.send.calledOnce).to.equal(true)

    expect(req.get.calledWith('Referrer')).to.equal(true)
  })
})
