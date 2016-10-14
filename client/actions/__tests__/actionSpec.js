const { describe, it, beforeEach, afterEach } = require('mocha')
const { expect } = require('chai')
const { bindFetchToWindow, unbindFetchFromWindow } = require('./_fetchStub')
const { spy, match } = require('sinon')

const fetch = {}
const {
  createNote,
  deleteNote,
  patchNote,
  CREATED_NOTE,
  DELETED_NOTE,
  PATCH_NOTE,
} = require('../index')

describe('actions mostly related to altering notes', function () {
    beforeEach(function () {
      // GLOBAL window object injected
      this.spies = bindFetchToWindow()
    })
    it('creates notes and dispatches all the right things', function () {
      // setup
      let { fetchSpy, jsonSpy } = this.spies
      let dispatch = spy()

      // exec
      createNote()(dispatch)

      // assertions
      expect(fetchSpy.calledOnce).to.equal(true)
      expect(jsonSpy.calledOnce).to.equal(true)
      expect(dispatch.firstCall.calledWith(match({ type: CREATED_NOTE}))).to.equal(true)
    })
    it('deletes notes and dispatches again', function () {
      // setup
      let { fetchSpy, textSpy } = this.spies
      let dispatch = spy()

      // exec
      deleteNote('fakeSlug')(dispatch)

      // assertions
      expect(fetchSpy.calledOnce).to.equal(true)
      expect(textSpy.calledOnce).to.equal(true)
      expect(dispatch.firstCall.calledWith(match({ type: DELETED_NOTE }))).to.equal(true)
    })
    it('patches notes and then dispatches', function () {
      // setup
      let { fetchSpy, textSpy } = this.spies
      let dispatch = spy()

      // exec
      patchNote('fakeSlug')(dispatch)

      // assertions
      expect(fetchSpy.calledOnce).to.equal(true)
      expect(textSpy.calledOnce).to.equal(true)
      expect(dispatch.firstCall.calledWith(match({ type: PATCH_NOTE}))).to.equal(true)
    })
  afterEach(function () {
    this.spies = unbindFetchFromWindow()
  })
})
