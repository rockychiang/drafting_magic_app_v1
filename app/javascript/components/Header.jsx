import React from "react"
import PropTypes from "prop-types"

class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Drafting Magic</h1>
        <button onClick={this.props.onNew}>New Draft</button>
      </React.Fragment>
    );
  }
}

export default Header
