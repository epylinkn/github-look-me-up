import React from 'react'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as actions from '../actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('fetchEvents', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates REQUEST_EVENTS and RECEIVE_EVENTS', () => {
    fetchMock.get('https://api.github.com/users/foo/events/public', {
      body: [{ id: 1, type: 'PushEvent' }],
      headers: { 'content-type': 'application/json' },
    })

    const expectedActions = [
      { type: actions.REQUEST_EVENTS },
      { type: actions.RECEIVE_EVENTS, events: [{ id: 1, type: 'PushEvent' }] },
    ]
    const store = mockStore({ events: [] })

    return store.dispatch(actions.fetchEvents('foo')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
