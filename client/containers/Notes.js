const React = require('react')
const { connect } =  require('react-redux')

const NewNoteButton = require('./NewNoteButton')
const NotesList = require('../components/NotesList')

require('./scss/notes.scss')

function Notes ({notes}) {
  // let { params }= router
  // console.log(params)
  return (<div className='notes'>
    <NewNoteButton />
    <NotesList notes={notes} params={''} />
  </div>)
}

const mapStateToProps = (state) => {
  let { router, notes } = state
  let { params } = router

  if (!params) { return {notes} }
  return {
    notes: notes.map(note => (
      Object.assign(note, {active: note.slug === params.slug})
    ))
  }
}

module.exports = connect(mapStateToProps)(Notes)
