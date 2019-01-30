import React from "react"
import PropTypes from "prop-types"
import Stack from "./Stack.jsx"

class SideBoard extends React.Component {
  render () {
    return (
      <div id="side-pool">
        <div className="info-bar">
          <span className="info-bar-text">Sideboard: {this.props.cards.length}</span>
        </div>
        <div id="pool-stacks">
          <Stack cards={this.props.cards} handleClick={this.props.handleClick} />
        </div>
      </div>
    );
  }
}

export default SideBoard
