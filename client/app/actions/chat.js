import { ADD_MESSAGE, CREATE_MESSAGE_LIST, CHANGE_DISPLAY_STATE } from '../constants/chat'

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
})

export const createMessageList = (messages) => ({
  type: CREATE_MESSAGE_LIST,
  messages,
})

export const changeDisplayState = (id) => ({
  type: CHANGE_DISPLAY_STATE,
  id,
})
