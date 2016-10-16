const { describe, it, beforeEach } = require('mocha')
const proxyquire = require('proxyquire')
const { spy, match } = require('sinon')
const { expect } = require('chai')

const { stubApi, REJECTINGAPI, RESOLVINGAPI } = require('./_apiStub')

const {
  CREATED_NOTE,
  DELETED_NOTE,
  PATCH_NOTE
} = require('../notes')

describe('note actions', function () {
  describe('successful', function () {
    beforeEach(function () {
      this.spies = stubApi(RESOLVINGAPI)
      this.actions = proxyquire('../notes', { '../Api': this.spies })
    })
    it('creates note and dispatches all the right things', function () {
      // setup
      let dispatch = spy()
      let { POST } = this.spies

      // exec
      this.actions.createNote()(dispatch)

      // assertions
      expect(POST.calledOnce).to.equal(true)
      expect(dispatch.firstCall.calledWith(match({ type: CREATED_NOTE }))).to.equal(true)
    })
    it('deletes notes and dispatches again', function () {
      // setup
      let dispatch = spy()
      let { DELETE } = this.spies

      // exec
      this.actions.deleteNote('fakeSlug')(dispatch)

      // assertions
      expect(DELETE.calledOnce).to.equal(true)
      expect(dispatch.firstCall.calledWith(match({ type: DELETED_NOTE }))).to.equal(true)
    })
    it('patches notes and then dispatches', function () {
      // setup
      let dispatch = spy()
      let { PATCH } = this.spies

      // exec
      this.actions.patchNote('fakeSlug')(dispatch)

      // assertions
      expect(PATCH.calledOnce).to.equal(true)
      expect(dispatch.firstCall.calledWith(match({ type: PATCH_NOTE }))).to.equal(true)
    })
  })
  describe('note actions with `broken` api', function () {
    beforeEach(function () {
      this.spies = stubApi(REJECTINGAPI)
      this.actions = proxyquire('../notes', { '../Api': this.spies })
    })
    it('dispatches showError() on api-rejection', function () {
      // setup
      let dispatch = spy()
      let { POST } = this.spies

      // exec
      this.actions.createNote()(dispatch)

      // assertions
      expect(POST.calledOnce).to.equal(true)
      // Note: note test should test if the dispatch is called with 'showError(error)'
      expect(dispatch.calledOnce).to.equal(true)
    })
  })
})
