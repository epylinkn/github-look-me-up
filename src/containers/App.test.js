import React from 'react'
import { shallow, mount } from 'enzyme'
import ConnectedApp, { App } from './App'
import * as actions from '../actions'

let wrapper
let props = {
  username: 'sindresorhus',
  isFetching: false,
  events: [],
  dispatch: jest.fn(),
}

describe('Component', () => {
  beforeEach(() => {
    wrapper = shallow(<App {...props} />)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a SearchBar', () => {
    expect(wrapper.find('SearchBar').exists()).toBe(true)
  })

  it('renders an EventList', () => {
    expect(wrapper.find('EventList').exists()).toBe(true)
  })
})

describe('When SearchBar form is submitted', () => {
  beforeEach(() => {
    wrapper = mount(<App {...props} />)
  })

  it('calls handleSubmit and dispatches', () => {
    expect(props.dispatch.mock.calls.length).toBe(0)
    wrapper.find('form').simulate('submit')
    expect(props.dispatch.mock.calls.length).toBe(2)
  })
})
