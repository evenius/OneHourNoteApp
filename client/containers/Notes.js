const React = require('react')
const { connect } =  require('react-redux')

const NewNoteButton = require('./NewNoteButton')
const NotesList = require('../components/NotesList')

require('./scss/notes.scss')

function Notes ({notes}) {
  return (<div className='notes'>
    <NewNoteButton />
    <NotesList notes={notes} />
  </div>)
}

module.exports = connect(({notes}) => ({notes}))(Notes);
