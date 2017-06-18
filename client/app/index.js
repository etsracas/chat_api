import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import ChatContainer from './containers/Chat'
import configureStore from './store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ChatContainer />   
  </Provider>,
  document.getElementById('chat-container')
)
