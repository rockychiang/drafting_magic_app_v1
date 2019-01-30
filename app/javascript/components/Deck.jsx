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
    let stacks = [one, two, three, four, five, six, land]
    let lands = land.length
    let creatures = cards.filter(card => card.types.includes("Creature")).length
    let total = cards.length
    let others = total - lands - creatures
    let deckstacks = stacks.map(stack => {
      if (stack.length > 0) {
        return <Stack cards={stack} handleClick={this.props.handleClick} handleHover={this.props.handleHover}/>
      }
    })

    return (
      <div id="deck-pool">
        <div className="info-bar">
          <span className="info-bar-text">Creatures: {creatures}</span>
          <span className="info-bar-text">Others: {others}</span>
          <span className="info-bar-text">Lands: {lands}</span>
          <span className="info-bar-text">Total: {total}</span>
        </div>
        <div id="deck-stacks">
          {deckstacks}
        </div>
      </div>
    );
  }
}

export default Deck
