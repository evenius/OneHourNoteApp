const { describe, it, before } = require('mocha')
const { expect } = require('chai')

const notesReducer = require('../notes')
const { CREATED_NOTE, DELETED_NOTE, PATCH_NOTE } = require('../../actions')

describe('Redux - reduce notes!', function () {
  var notes
  before(function () {
    notes = null
  })
  it('defaults to return an empty array', function () {
    notes = notesReducer(notes, {})
    expect(notes).to.be.empty
    expect(notes).to.be.an('array')
  })

  it('adds a provided note using the CREATED_NOTE action', function () {
    let action = {
      type: CREATED_NOTE,
      slug: 'fakeSlug23'
    }

    notes = notesReducer(notes, action)
    expect(notes.length).to.equal(1)
    expect(notes[0].slug).to.equal(action.slug)
  })

  it('modifies a note using the PATCH_NOTE action', function () {
    let action = {
      type: PATCH_NOTE,
      slug: 'fakeSlug23',
      patch: {
        text: 'i\'m mr meeseeks'
      }
    }

    notes = notesReducer(notes, action)
    expect(notes.length).to.equal(1)
    expect(notes[0].slug).to.equal(action.slug)
    expect(notes[0].text).to.equal(action.patch.text)
  })

  it('deletes a note using the DELETED_NOTE action', function () {
    let action = {
      type: DELETED_NOTE,
      slug: 'fakeSlug23'
    }

    notes = notesReducer(notes, action)
    expect(notes).to.be.empty
  })

  it('can add two notes, no problem', function () {
    let action = {
      type: CREATED_NOTE,
      slug: 'fakeSlug23'
    }
    notes = notesReducer(notes, action)
    notes = notesReducer(notes, action)

    expect(notes.length).to.equal(2)
  })
})
