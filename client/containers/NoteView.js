const React = require('react')
const TextArea =  require('react-textarea-autosize').default
const { connect } =  require('react-redux')
const { patchNote } = require('../actions')

require('./scss/noteView.scss')

function mapStateToProps(state, currentProps) {
  let { slug } = currentProps.params
  return {note: state.notes.find((note) => (note.slug === slug))}
}

function mapDispatchToProps(dispatch, currentProps) {
  let { slug } = currentProps.params
  return {
    onChange: (e) => {
      dispatch(patchNote(slug, {text: e.target.value}))
    }
  }
}

function NoteView ({note, onChange}) {
  if (!note) {
    return (<div className='noteView'><h2>No note selected</h2></div>)
  }

  let { slug, text } = note
  return (
    <div className='noteView'>
     <TextArea value={text || ''} placeholder='Start typing here...' onChange={onChange} />
   </div>)
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(NoteView)
