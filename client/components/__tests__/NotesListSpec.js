const {describe, before, it} = require('mocha')
const React = require('react')
const {expect} = require('chai')
const { shallow } = require('enzyme')

const { renderWithStore } = require('../../utils/testUtils')

const NotesList = require( '../NotesList')
const { Link } = require('react-router')

describe('NotesList', function () {
  it('renders `no notes` if empty', () => {
    let component = shallow(<NotesList notes={[]} />)
    expect(component.text()).to.equal('👆 No notes created yet')
  })

  it('renders a list with 2 notes if 2 notes provided', () => {
    let note = {slug: 'blabla', text: 'blopblop'}
    let component = shallow(<NotesList notes={[note, note]} />)

    let listItems = component.find('li')

    expect(component.text()).to.not.equal('No notes')
    expect(listItems.length).to.equal(2)
  })
  it('It renders the first row of the text as `listTitle`', () => {
    let note = {slug: 'blabla', text: 'firstrow here\nsecondrow here'}
    let component = shallow(<NotesList notes={[note]} />)

    let listItem = component.find('ul').first()

    expect(listItem.text()).to.not.have.string('secondrow here')
    // expect(listItem.text()).to.equal('firstrow here')
  })
})
