import React from "react"
import PropTypes from "prop-types"
import Stack from "./Stack.jsx"

class Deck extends React.Component {
  render () {
    let one = this.props.cards.filter(card => card.cmc < 2 && !card.types.includes("Land"))
    let two = this.props.cards.filter(card => card.cmc === 2)
    let three = this.props.cards.filter(card => card.cmc === 3)
    let four = this.props.cards.filter(card => card.cmc === 4)
    let five = this.props.cards.filter(card => card.cmc === 5)
    let six = this.props.cards.filter(card => card.cmc > 5)
    let land = this.props.cards.filter(card => card.types.includes("Land"))
    let lands = land.length
    let creatures = this.props.cards.filter(card => card.types.includes("Creature")).length
    let total = this.props.cards.length
    let others = total - lands - creatures

    return (
      <div id="deck-pool" style={this.props.style}>
        <div className="info-bar">
          <span>Lands: {lands}    Creatures: {creatures}    Others: {others}    Total: {total}</span>
        </div>
        <div id="deck-stacks">
          <Stack cards={one} />
          <Stack cards={two}  />
          <Stack cards={three} />
          <Stack cards={four} />
          <Stack cards={five} />
          <Stack cards={six} />
          <Stack cards={land} />
        </div>
      </div>
    );
  }
}

export default Deck
