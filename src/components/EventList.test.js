import React from 'react'
import { shallow } from 'enzyme'
import EventList from './EventList'

let wrapper
let mockEvents = [
  { id: 1, type: 'PullRequestEvent', repo: { name: 'foo/one' } },
  { id: 2, type: 'PushEvent', repo: { name: 'foo/two' } },
  { id: 3, type: 'GollumEvent', repo: { name: 'foo/three' } },
]

describe('When GitHub returns events', () => {
  beforeEach(() => {
    wrapper = shallow(<EventList events={mockEvents} isFetching={false} />)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a list of events as an unordered list', () => {
    expect(wrapper.find('li').length).toEqual(mockEvents.length)
  })

  it('renders abbreviated event.type', () => {
    expect(
      wrapper
        .find('.EventList-icon')
        .map(el => el.text())
        .sort()
    ).toEqual(['PullRequest', 'Push', 'Gollum'].sort())
  })
})

describe('When isFetching is true', () => {
  beforeEach(() => {
    wrapper = shallow(<EventList events={mockEvents} isFetching={true} />)
  })

  it('renders a loading icon', () => {
    expect(wrapper.find('.loader').exists()).toEqual(true)
  })
})

describe('When there are no events', () => {
  beforeEach(() => {
    mockEvents = []
    wrapper = shallow(<EventList events={mockEvents} isFetching={false} />)
  })

  it('renders a "no events" image', () => {
    expect(wrapper.find('.EventList-scratch').exists()).toEqual(true)
  })

  it('does not render a list of events', () => {
    expect(wrapper.find('li').length).toEqual(0)
  })
})
