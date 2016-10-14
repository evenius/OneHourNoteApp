const { CREATED_NOTE, DELETED_NOTE, PATCH_NOTE } = require('../actions')

const notesReducer = (state, action) => {
  let nextState = state || []
  switch (action.type) {
    case DELETED_NOTE:
      nextState = nextState.filter((note) => (note.slug !== action.slug))
      break
    case CREATED_NOTE:
      nextState = nextState.slice(0) // Quick and dirty immutability
      nextState.push({slug: action.slug})
      break
    case PATCH_NOTE:
      nextState = nextState.map((note) => {
        if (note.slug !== action.slug) {
          return note
        }
        return Object.assign({}, note, action.patch)
      })
      break
  }
  return nextState
}

module.exports = notesReducer
