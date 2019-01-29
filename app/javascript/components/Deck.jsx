import React from "react"
import PropTypes from "prop-types"
import Stack from "./Stack.jsx"

class Deck extends React.Component {
  render () {
    let cards = this.props.cards
    let one = cards.filter(card => card.cmc < 2 && !card.types.includes("Land"))
    let two = cards.filter(card => card.cmc === 2)
    let three = cards.filter(card => card.cmc === 3)
    let four = cards.filter(card => card.cmc === 4)
    let five = cards.filter(card => card.cmc === 5)
    let six = cards.filter(card => card.cmc > 5)
    let land = cards.filter(card => card.types.includes("Land"))
    let lands = land.length
    let creatures = cards.filter(card => card.types.includes("Creature")).length
    let total = cards.length
    let others = total - lands - creatures

    return (
      <div id="deck-pool" style={this.props.style}>
        <div className="info-bar">
          <span className="info-bar-text">Creatures: {creatures}</span>
          <span className="info-bar-text">Others: {others}</span>
          <span className="info-bar-text">Lands: {lands}</span>
          <span className="info-bar-text">Total: {total}</span>
        </div>
        <div id="deck-stacks">
          <Stack cards={one} handleClick={this.props.handleClick} />
          <Stack cards={two} handleClick={this.props.handleClick} />
          <Stack cards={three} handleClick={this.props.handleClick} />
          <Stack cards={four} handleClick={this.props.handleClick} />
          <Stack cards={five} handleClick={this.props.handleClick} />
          <Stack cards={six} handleClick={this.props.handleClick} />
          <Stack cards={land} handleClick={this.props.handleClick} />
        </div>
      </div>
    );
  }
}

export default Deck
