const { describe, it } = require('mocha')
const { expect } = require('chai')

const patchNote = require('../patchNote')
const { mockRouteArgs, WORKINGDB, BROKENDB } = require('./_mockResReq')

describe('PATCH /notes/:note', function () {
  it('can patch the database, and show it worked', function () {
    // Setup
    let {req, res} = mockRouteArgs(WORKINGDB)
    let findOneAndUpdateStub = req.app.locals.db.Note.findOneAndUpdate

    // Exec
    patchNote(req, res)

    // Assert
    expect(findOneAndUpdateStub.calledOnce).to.equal(true)
    expect(res.send.calledWith('error')).to.equal(false)
    expect(res.status.calledWith(500)).to.equal(false)

    expect(res.send.calledWith('ok')).to.equal(true)
  })
  it('couldn\'t patch the database, but showed it didn\'t', function () {
    // Setup
    let {req, res} = mockRouteArgs(BROKENDB)
    let findOneAndUpdateStub = req.app.locals.db.Note.findOneAndUpdate

    // Exec
    patchNote(req, res)

    // Assert
    expect(findOneAndUpdateStub.calledOnce).to.equal(true)

    expect(res.send.calledWith('error')).to.equal(true)
    expect(res.status.calledWith(500)).to.equal(true)

    expect(res.send.calledWith('ok')).to.equal(false)
  })
})
