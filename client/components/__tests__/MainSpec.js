const {describe, before, it} = require('mocha')
const React = require('react')
const {expect} = require('chai')
const { shallow } = require('enzyme')

const Main = require( '../Main')

const Header = require('../../containers/Header')
const Notes = require('../../containers/Notes')
const NoteView = require('../../containers/NoteView')

describe('Main', function () {
  before(function() {
    this.component = shallow(<Main />)
  })

  it('renders header', function () {
    const header = this.component.find(Header)
    expect(header.length).to.equal(1)
  })
  it('renders Notes', function () {
    const notes = this.component.find(Notes)
    expect(notes.length).to.equal(1)
  })
})
