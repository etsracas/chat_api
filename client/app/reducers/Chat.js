import { combineReducers } from 'redux'
import { ADD_MESSAGE, CREATE_MESSAGE_LIST, CHANGE_DISPLAY_STATE, UPDATE_MESSAGE} from '../constants/chat'

 export const chatInitialState = []

const toggleMessage = (id, message) => {
  if(id == message.id) {
    message.displayState = !message.displayState
  }
  return message
}

const changeMessage = (newMessage, oldMessage) => {
  if(newMessage.id == oldMessage.id) {
    newMessage['displayState'] = true
    return newMessage
  }
  return oldMessage
}

const chat = (state = '', action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const message = action.message
      message['displayState'] = true
      return [...state, message]
    case CREATE_MESSAGE_LIST:
      return action.messages.map((message) => {
        message['displayState'] = true
        return message
      })
    case CHANGE_DISPLAY_STATE:
      return state.map((message) => toggleMessage(action.id, message))
    case UPDATE_MESSAGE:
      return state.map((message) => changeMessage(action.message, message))
    default:
      return state
  }
}

export default chat
