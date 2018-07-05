import { combineReducers } from 'redux'
import { CHANGE_USERNAME, REQUEST_EVENTS, RECEIVE_EVENTS } from '../actions'

export const username = (state = '<someone>', action) => {
  switch (action.type) {
    case CHANGE_USERNAME:
      return action.username
    default:
      return state
  }
}

export const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_EVENTS:
      return true
    case RECEIVE_EVENTS:
      return false
    default:
      return state
  }
}

export const events = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.events
    default:
      return state
  }
}

export default combineReducers({
  username,
  isFetching,
  events,
})
