const { describe, it } = require('mocha')
const { expect } = require('chai')

const getIndex = require('../getIndex')
const { mockRouteArgs, WORKINGDB, BROKENDB } = require('./_mockResReq')

describe('GET /', function () {
  describe('working cases, no problems', function () {
    it('fetches User and Notes, then renders `app`', function () {
      let {req, res} = mockRouteArgs(WORKINGDB)

      // Setup
      let whereNoteStub = req.app.locals.db.Note.where
      let whereUserStub = req.app.locals.db.User.where

      // Exec
      getIndex(req, res)

      // Assert
      expect(whereUserStub.calledOnce).to.equal(true)
      expect(whereNoteStub.calledOnce).to.equal(true)
      expect(res.render.calledWith('app')).to.equal(true)
      expect(res.redirect.called).to.equal(false)
    })
  })
  describe('broken DB, should redirect', function () {
    it('fetches User and Notes, then renders `app`', function () {
      let {req, res} = mockRouteArgs(BROKENDB)

      // Setup
      let whereNoteStub = req.app.locals.db.Note.where
      let whereUserStub = req.app.locals.db.User.where

      // Exec
      getIndex(req, res)

      // Assert
      expect(whereUserStub.calledOnce).to.equal(true)
      expect(whereNoteStub.called).to.equal(false)
      expect(res.render.called).to.equal(false)
      expect(res.redirect.calledOnce).to.equal(true)
    })
  })
})
