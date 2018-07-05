import * as reducer from '../reducers'
import * as actions from '../actions'

describe('username reducer', () => {
  it('returns the initial state', () => {
    expect(reducer.username(undefined, {})).toEqual('<someone>')
  })

  it('handles CHANGE_USERNAME', () => {
    expect(
      reducer.username(undefined, {
        type: actions.CHANGE_USERNAME,
        username: 'foo',
      })
    ).toEqual('foo')
  })
})

describe('isFetching reducer', () => {
  it('returns the initial state', () => {
    expect(reducer.isFetching(undefined, {})).toEqual(false)
  })

  it('handles REQUEST_EVENTS', () => {
    expect(reducer.isFetching(undefined, actions.requestEvents())).toEqual(true)
  })

  it('handles RECEIVE_EVENTS', () => {
    expect(reducer.isFetching(undefined, actions.receiveEvents())).toEqual(
      false
    )
  })
})

describe('events reducer', () => {
  it('returns the initial state', () => {
    expect(reducer.events(undefined, {})).toEqual([])
  })

  it('handles RECEIVE_EVENTS', () => {
    expect(
      reducer.events(undefined, {
        type: actions.RECEIVE_EVENTS,
        events: [{ id: 1 }],
      })
    ).toEqual([{ id: 1 }])
  })
})
