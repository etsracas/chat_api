import React, { PropTypes } from 'react'

const Message = ({ text, onClick }) => (
    <div>
      <span onClick={onClick}>{text}</span>
    </div>
)

export default Message
