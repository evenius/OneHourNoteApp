const { describe, it } = require('mocha')
const { expect } = require('chai')

const deleteNote = require('../deleteNote')
const { mockRouteArgs, WORKINGDB, BROKENDB } = require('./_mockResReq')

describe('DELETE /notes/:note', function () {
  it('can delete a Note', function () {
    // Setup
    let {req, res} = mockRouteArgs(WORKINGDB)
    let removeStub = req.app.locals.db.Note.remove

    // Exec
    deleteNote(req, res)

    // Assert
    expect(removeStub.calledOnce).to.equal(true)
    expect(res.send.calledOnce).to.equal(true)
    // Should not accidentally go weird
    expect(res.status.called).to.equal(false)
  })
  it('can show you when it fails to delete a note', function () {
    // setup
    let {req, res} = mockRouteArgs(BROKENDB)
    let removeStub = req.app.locals.db.Note.remove

    // exec
    deleteNote(req, res)

    // assert
    expect(removeStub.calledOnce).to.equal(true)
    expect(res.send.calledOnce).to.equal(true)
    expect(res.status.calledWith(500)).to.equal(true)
  })
})
