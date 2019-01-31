import React from "react"
import PropTypes from "prop-types"

class DeckList extends React.Component {
  render () {
    let { cards, handleClick, handleHover } = this.props;
    let total = cards.length;
    return (
      <div id="deck-list">
        <div className="info-bar">
          <span className="info-bar-text">Total: {total}</span>
        </div>
        <div id="card-list">
        </div>
      </div>
    );
  }
}

export default DeckList
