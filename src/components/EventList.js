import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import scratchSvg from '../scratch.svg'
import './EventList.css'

class EventList extends Component {
  renderEventIcon(eventType) {
    eventType = eventType.replace('Event', '')

    return (
      <div className="EventList-icon-wrapper">
        <div className="EventList-icon">{eventType}</div>
      </div>
    )
  }

  renderEvent(event) {
    return (
      <li key={event.id} className="EventList-row">
        {this.renderEventIcon(event.type)}

        <div className="EventList-detail">
          <h3>
            <a
              className="unstyled"
              href={`https://github.com/${event.repo.name}`}
              target="_blank"
            >
              {event.repo.name}
            </a>
          </h3>
          {moment(event.created_at).fromNow()}
        </div>
      </li>
    )
  }

  renderNoEvents() {
    return <img src={scratchSvg} className="EventList-scratch" alt="scratch" />
  }

  render() {
    const { events, isFetching } = this.props

    if (!events || events.length === 0) {
      return this.renderNoEvents()
    }

    return (
      <ul className="EventList">
        {isFetching ? (
          <div className="loader">Loading...</div>
        ) : (
          events.map(this.renderEvent.bind(this))
        )}
      </ul>
    )
  }
}

EventList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  events: PropTypes.array.isRequired,
}

export default EventList
