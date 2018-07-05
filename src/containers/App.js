import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { changeUsername, fetchEvents } from '../actions'
import EventList from '../components/EventList'
import SearchBar from '../components/SearchBar'

import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)

    this.usernameInput = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    const username = this.usernameInput.current.value
    this.props.dispatch(changeUsername(username))
    this.props.dispatch(fetchEvents(username))
  }

  render() {
    const { username, isFetching, events } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <h1>Github: Look Me Up</h1>
        </header>

        <div className="App-body">
          <SearchBar
            username={username}
            usernameInput={this.usernameInput}
            handleSubmit={this.handleSubmit}
          />
          <EventList events={events} isFetching={isFetching} />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  username: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  events: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const { username, isFetching, events } = state

  return {
    username,
    isFetching,
    events,
  }
}

export default connect(mapStateToProps)(App)
