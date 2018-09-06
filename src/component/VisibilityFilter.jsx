import React from 'react'

const style = { marginLeft: '10px' }
const Link = ({ fn, enabled = true, children }) => (
  <button style={style} onClick={fn}>
    {' ' + children + ' '}
  </button>
)
const VisibilityFilter = ({ onClickAll, onClickPending, onClickCompleted }) => (
  <div>
    <span>Show: </span>
    <Link fn={onClickAll}>Alles</Link>
    <Link fn={onClickPending}>Pending</Link>
    <Link fn={onClickCompleted}>Completed</Link>
  </div>
)

export default VisibilityFilter
