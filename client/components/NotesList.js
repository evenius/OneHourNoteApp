const React = require('react')
const { Link } = require('react-router')
const DeleteNoteButton = require('../containers/DeleteNoteButton')

require('./scss/notesList.scss')

module.exports = ({notes, params}) => {
  if (!notes.length) {
    return (<div className='notesList'><p>👆 No notes created yet</p></div>)
  }
  return (<div className='notesList'><ul>
    {
      notes.map((note, i) => {
          return (
            <li key={i}>
             <Link className={(note.active ? 'active' : '')}to={'/notes/' + note.slug}>
              {note.text ? note.text.split('\n')[0] : '[empty]' }
             </Link>
             <DeleteNoteButton slug={note.slug} />
          </li>)
      })
    }
  </ul></div>)
}
