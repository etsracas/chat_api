import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/chat'

import MessageList from '../../components/MessageList'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { chat, actions } = this.props
    return (
      <MessageList messages={[
        {"id":1, "text":"てすと１"},
        {"id":2, "text":"てすと２"}
      ]} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    chat: state.Chat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
