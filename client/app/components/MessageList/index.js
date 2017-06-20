import React, { PropTypes } from 'react'
import Message from '../Message'

const MessageList = ({ messages }) => {
  const test = messages
  console.log(test)
  return (
    <div>
      {messages.map((message) => <Message key={message.id} text={message.text} />)}
    </div>
  )
}

export default MessageList
