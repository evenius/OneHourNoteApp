const React = require('react')
const { connect } =  require('react-redux')
const { createNote } = require('../actions')
const { push } = require('redux-router')

require('./scss/newNoteButton.scss')

function NewNoteButton ({ onClick }) {
  return (<button className='newNoteButton' onClick={onClick}>New Note+</button>)
}

function mapDispatchToProps(dispatch) {
  return {
    onClick() {
      dispatch(createNote())
    }
  }
}

module.exports = connect(() => ({}), mapDispatchToProps)(NewNoteButton);
