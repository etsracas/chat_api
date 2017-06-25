import React, { PropTypes, Component } from 'react'
import $ from 'jquery'
import Message from '../Message'
import MessageForm from '../MessageForm'

class MessageList extends Component {
  componentDidMount(){
    const { actions } = this.props
    $.ajax({
      type: 'GET',
      url: '/api/messages',
      success: ((data) => actions.createMessageList(data))
    })
  }

  onToggleDisplay(id){
    return () => {
      const {actions} = this.props
      actions.changeDisplayState(id)
    }
  }

  render(){
    const { actions, messages } = this.props
    return (
      <div>
        {messages.map((message) => {
          if (message.displayState){
            return(<Message key={message.id} text={message.text} actions={actions} onClick={this.onToggleDisplay(message.id).bind(this)} />)
          } else {
            return(<MessageForm key={message.id} message={message} actions={actions} onClick={this.onToggleDisplay(message.id).bind(this)}/>)
          }
        })}
      </div>
    )
  }
}

export default MessageList
