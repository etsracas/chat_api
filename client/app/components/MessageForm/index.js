import React, { PropTypes, Component } from 'react'
import $ from 'jquery'

class MessageForm extends Component {
  onSubmit() {
    const { actions } = this.props
    $.ajax({
      type: 'POST',
      url: '/api/messages',
      data: {
        message: {text: this.textMessage.value}
      },
      success: ((data) => actions.addMessage(data))
    })
  }

  onUpdate() {
    const { actions, message } = this.props
    $.ajax({
      type: 'PATCH',
      url: '/api/messages/' + message.id,
      data: {
        message: {text: this.textMessage.value}
      },
      success: ((data) => actions.updateMessage(data))
    })
  }

  render() {
    const { message, onClick } = this.props
    const cancelButton = message ? <input type='button' value='キャンセル' onClick={onClick}/> : null
    return (
      <div>
        <textarea rows="4" cols="40" ref={(input) => {this.textMessage = input}} defaultValue={message ? message.text : ''} />
        <input type='button' value={message ? '更新' : '登録'} onClick={message ? this.onUpdate.bind(this) : this.onSubmit.bind(this)} />
        {cancelButton}
      </div>
    )
  }
}

export default MessageForm
