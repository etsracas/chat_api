import React, { PropTypes } from 'react'

const Messages = ({ name, updateName }) => (
  <div>
    <h3>
      Hello, {name}!
    </h3>
    <hr />
    <form >
      <label htmlFor="name">
        say hello to:
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
    </form>
  </div>
)

Messages.propTypes = {
  name: PropTypes.string,
  updateName: PropTypes.func.isRequired,
}

export default Messages
