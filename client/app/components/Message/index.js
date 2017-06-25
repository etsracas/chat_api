import React, { PropTypes } from 'react'
import $ from 'jquery'

const Message = ({ text, onClick, id, actions }) => {
  const handleDelete = () => {
    $.ajax ({
      type: 'DELETE',
      url: '/api/messages/' + id,
      success: (actions.deleteMessage(id))
    })
  }

  return(
    <div>
      <span onClick={onClick}>{text}</span>
      <input type='button' value='削除' onClick={handleDelete} />
    </div>
  )
}

export default Message
