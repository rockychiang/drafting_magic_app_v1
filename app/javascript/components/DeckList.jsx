import React from "react"
import PropTypes from "prop-types"
import sortBy from "../utils/sortBy.js"

class DeckList extends React.Component {
  render () {
    let { cards, handleClick, handleHover } = this.props;
    let total = cards.length;
    let cardlist = sortBy("cmc", cards).map((card, i) => {

      return (
        <img
          key={i}
          className="card list"
          alt={card.name}
          src={card.imgurl}
          onClick={handleClick}
          onMouseOver={handleHover}
        />
      )
    })

    return (
      <div id="deck-list">
        <div className="info-bar">
          <span className="info-bar-text">Total: {total}</span>
        </div>
        <div id="card-list">
          {cardlist}
        </div>
      </div>
    );
  }
}

export default DeckList
