const { describe, it, beforeEach } = require('mocha')
const { expect } = require('chai')

const ensureLoggedIn = require('../ensureLoggedIn')
const { mockRouteArgs, IS_AUTHENTICATED, UNAUTHENTICATED } = require('../../routes/__tests__/_mockResReq')

describe('ensureLoggedIn middleware', function () {
  describe('not logged in', function () {
    beforeEach(function () {
      this.middlewareArgs = mockRouteArgs(UNAUTHENTICATED)
    })
    it('redirects if text/html request', function () {
      // Setup
      let { req, res, next } = this.middlewareArgs
      req.get = req.get.returns('text/html')

      // exec
      ensureLoggedIn(req, res, next)
      // Expectationssss
      expect(req.get.calledOnce).to.equal(true)
      expect(res.redirect.calledWith('/login')).to.equal(true)
    })
    it('returns 403 forbidden if application/json', function () {
      // Setup
      let { req, res, next } = this.middlewareArgs
      req.get = req.get.returns('application/json')

      // exec
      ensureLoggedIn(req, res, next)

      // Expectationssss
      expect(req.get.calledOnce).to.equal(true)
      expect(res.redirect.called).to.equal(false)
      expect(res.status.calledWith(403)).to.equal(true)
    })
  })
  describe('is logged in', function () {
    console.log(IS_AUTHENTICATED)
    it('calls next() when all is in order', function () {
      let { req, res, next } = mockRouteArgs(IS_AUTHENTICATED)

      ensureLoggedIn(req, res, next)
      // Expectationssss
      expect(req.get.called).to.equal(false)
      expect(res.send.called).to.equal(false)

      expect(next.calledOnce).to.equal(true)
    })
  })
})
