import { ADD_MESSAGE, CREATE_MESSAGE_LIST, CHANGE_DISPLAY_STATE, UPDATE_MESSAGE } from '../constants/chat'

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

export const updateMessage = (message) => ({
  type: UPDATE_MESSAGE,
  message,
})
