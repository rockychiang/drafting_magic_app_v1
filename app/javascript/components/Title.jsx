import React from "react"
import PropTypes from "prop-types"

class Title extends React.Component {
  render () {
    let newButton
    if (this.props.started) {
      newButton = <button id="btn-new" onClick={this.props.onNew}>New Draft</button>
    }

    return (
      <header>
        <h1>Drafting Magic</h1>
        {newButton}
      </header>
    );
  }
}

export default Title
