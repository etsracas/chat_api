import React, { PropTypes, Component } from 'react'

class MessageForm extends Component {
  onSubmit() {
    const { actions } = this.props
    actions.addMessage(this.textMessage.value)
  }

  render() {
    return (
      <div>
        <textarea rows="4" cols="40" ref={(input) => {this.textMessage = input}} />
        <input type="button" value="登録" onClick={this.onSubmit.bind(this)} />
      </div>
    )
  }
}

export default MessageForm
