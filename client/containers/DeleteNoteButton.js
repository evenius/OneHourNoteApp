const React = require('react')
const { connect } = require('react-redux')
const { deleteNote } = require('../actions')

function DeleteNoteButton ({ slug, onClick }) {
  return (<button value={slug} onClick={onClick}>Delete note</button>)
}

function mapDispatchToProps (dispatch) {
  return {
    onClick (e) {
      dispatch(deleteNote(e.target.value))
    }
  }
}

module.exports = connect(() => ({}), mapDispatchToProps)(DeleteNoteButton);
