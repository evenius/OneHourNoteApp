const React = require('react')
const { Link } = require('react-router')
const DeleteNoteButton = require('../containers/DeleteNoteButton')

module.exports = ({notes}) => {
  if(!notes.length) {
    return (<div><h3>No notes</h3></div>)
  }
  return (<div><ul>
    {
      notes.map((note, i) => {
          return (
            <li key={i}>
             <Link to={'/notes/' + note.slug}>
              {note.text ? note.text.split('\n')[0] : '[empty]' }
             </Link>
             <DeleteNoteButton slug={note.slug} />
          </li>)
      })
    }
  </ul></div>)
}
