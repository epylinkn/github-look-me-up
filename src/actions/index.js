import 'cross-fetch/polyfill'

export const REQUEST_EVENTS = 'REQUEST_EVENTS'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const CHANGE_USERNAME = 'CHANGE_USERNAME'

export const requestEvents = () => ({
  type: REQUEST_EVENTS,
})

export const receiveEvents = json => ({
  type: RECEIVE_EVENTS,
  events: json,
})

export const changeUsername = username => ({
  type: CHANGE_USERNAME,
  username,
})

export const fetchEvents = username => {
  return function(dispatch) {
    dispatch(requestEvents())

    return fetch(`https://api.github.com/users/${username}/events/public`)
      .then(response => response.json())
      .then(json => dispatch(receiveEvents(json)))
  }
}
