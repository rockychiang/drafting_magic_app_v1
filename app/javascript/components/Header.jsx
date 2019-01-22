import React from "react"
import PropTypes from "prop-types"

class Header extends React.Component {
  render () {
    let newButton
    if (this.props.started) {
      newButton = <button id="btn-new" onClick={this.props.onNew}>New Draft</button>
    }

    return (
      <React.Fragment>
        <header>
          <h1>Drafting Magic</h1>
          {newButton}
        </header>
      </React.Fragment>
    );
  }
}

export default Header
