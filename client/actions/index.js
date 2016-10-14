const { push } = require('redux-router')

const CREATE_NOTE = 'CREATE_NOTE'
const CREATED_NOTE = 'CREATED_NOTE'

const DELETE_NOTE = 'DELETE_NOTE'
const DELETED_NOTE = 'DELETED_NOTE'

const PATCH_NOTE = 'PATCH_NOTE'
const PATCHED_NOTE = 'PATCHED_NOTE'

function createNote () {
  return (dispatch) => {
    window.fetch('/notes', {method: 'POST'}).then(function (response) {
      return response.json()
    }).then((json) => {
      dispatch({type: CREATED_NOTE, slug: json.slug})
      dispatch(push('/notes/' + json.slug))
    })
  }
}

function deleteNote (slug) {
  return (dispatch) => {
    window.fetch('/notes/' + slug, {method: 'DELETE'}).then(function (response) {
      return response.text()
    }).then((text) => {
      dispatch({type: DELETED_NOTE, slug})
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
    window.fetch('/notes/' + slug, {
      method: 'PATCH',
      body: JSON.stringify(patch),
      'headers': {'Content-Type': 'application/json'}
    }).then(function (response) {
      return response.text()
    }).then((text) => {
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
