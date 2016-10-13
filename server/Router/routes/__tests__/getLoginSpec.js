const { describe, it } = require('mocha')
const { expect } = require('chai')

const getLogin = require('../getLogin')
const { mockRouteArgs } = require('./_mockResReq')

describe('GET /login', function () {
  it('can call the render function', function () {
    // Setup
    let {req, res} = mockRouteArgs()

    // Exec
    getLogin(req, res)

    // Assert
    expect(res.render.calledOnce).to.equal(true)
  })
})
