const { push } = require('redux-router')

const { showError } = require('./notification')
const { POST, DELETE, PATCH } = require('../Api')

const CREATE_NOTE = 'CREATE_NOTE'
const CREATED_NOTE = 'CREATED_NOTE'

const DELETE_NOTE = 'DELETE_NOTE'
const DELETED_NOTE = 'DELETED_NOTE'

const PATCH_NOTE = 'PATCH_NOTE'
const PATCHED_NOTE = 'PATCHED_NOTE'

function createNote () {
  return (dispatch) => {
    POST('/notes')
    .then((json) => {
      dispatch({type: CREATED_NOTE, slug: json.slug})
      dispatch(push('/notes/' + json.slug))
    }).catch(error => {
      dispatch(showError(error))
    })
  }
}

function deleteNote (slug) {
  return (dispatch) => {
    DELETE('/notes/' + slug)
    .then((json) => {
      dispatch({type: DELETED_NOTE, slug})
    }).catch(error => {
      dispatch(showError(error))
    })
  }
}

function patchNote (slug, patch) {
  return (dispatch) => {
    dispatch({
      type: PATCH_NOTE,
      slug,
      patch
    })
    PATCH('/notes/' + slug, patch)
    .catch(error => {
      dispatch(showError(error))
    })
  }
}

module.exports = {
  CREATE_NOTE,
  CREATED_NOTE,
  DELETE_NOTE,
  DELETED_NOTE,
  PATCH_NOTE,
  PATCHED_NOTE,
  createNote,
  deleteNote,
  patchNote
}
