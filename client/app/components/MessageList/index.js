import React, { PropTypes } from 'react'
import Message from '../Message'

const MessageList = ({ messages }) => {
  const text = messages

  return (
    <div>
      {messages.map((message) => <Messages key={message.id} text={message.text} />)}
    </div>
  )
}

export default MessageList
