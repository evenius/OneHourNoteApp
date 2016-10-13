const { describe, it } = require('mocha')
const { expect } = require('chai')

const postNote = require('../postNote')
const { mockRouteArgs, WORKINGDB, BROKENDB } = require('./_mockResReq')

describe('POST /notes', function () {
  it('adds a note, and associates it with user', function () {
    // Setup
    let {req, res} = mockRouteArgs(WORKINGDB)
    let findOneAndUpdateUserStub = req.app.locals.db.User.findOneAndUpdate
    let createNoteStub = req.app.locals.db.Note.create

    // Exec
    postNote(req, res)

    // Assert
    expect(createNoteStub.calledOnce).to.equal(true)
    expect(findOneAndUpdateUserStub.calledOnce).to.equal(true)
    expect(res.status.calledWith(500)).to.equal(false)
    expect(res.set.calledWith('Content-Type', 'application/json')).to.equal(true)
    expect(res.send.calledOnce).to.equal(true)
  })
  it('unable to create not, because of BROKENDB', function () {
    // // Setup
    let {req, res} = mockRouteArgs(BROKENDB)
    let findOneAndUpdateUserStub = req.app.locals.db.User.findOneAndUpdate
    let createNoteStub = req.app.locals.db.Note.create

    // Exec
    postNote(req, res)

    // Assert
    expect(createNoteStub.calledOnce).to.equal(true)
    expect(findOneAndUpdateUserStub.calledOnce).to.equal(false)
    expect(res.status.calledWith(500)).to.equal(true)
    expect(res.set.calledWith('Content-Type', 'application/json')).to.equal(false)
    expect(res.send.calledOnce).to.equal(true)
  })
})
