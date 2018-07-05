import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from './SearchBar'

let wrapper
const mockHandleSubmit = jest.fn()
const props = {
  username: 'sindresorhus',
  usernameInput: React.createRef(),
  handleSubmit: mockHandleSubmit,
}

beforeEach(() => {
  wrapper = shallow(<SearchBar {...props} />)
})

it('renders correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

it('displays the username', () => {
  expect(wrapper.find('.SearchBar-username').text()).toEqual(props.username)
})

describe('When the form is submitted', () => {
  it('calls the mock handleSubmit function', () => {
    expect(mockHandleSubmit.mock.calls.length).toBe(0)
    wrapper.find('form').simulate('submit')
    expect(mockHandleSubmit.mock.calls.length).toBe(1)
  })
})
