import React from "react"
import PropTypes from "prop-types"

class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Drafting Magic</h1>
        <button>New Sim</button>
      </React.Fragment>
    );
  }
}

export default Header
