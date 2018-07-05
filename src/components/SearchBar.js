import React from 'react'
import PropTypes from 'prop-types'

import './SearchBar.css'

const SearchBar = ({ username, usernameInput, handleSubmit }) => {
  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <label className="SearchBar-label" htmlFor="username">
          Username:{' '}
        </label>
        <input type="text" id="username" ref={usernameInput} />

        <button className="SearchBar-submit" type="submit">
          GO!
        </button>

        <div className="SearchBar-title">
          Public events for{' '}
          <span className="SearchBar-username">{username}</span>
        </div>
      </form>
    </div>
  )
}

SearchBar.propTypes = {
  username: PropTypes.string.isRequired,
  usernameInput: PropTypes.shape({
    value: PropTypes.instanceOf(HTMLInputElement),
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default SearchBar
