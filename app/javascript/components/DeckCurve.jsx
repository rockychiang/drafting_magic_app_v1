import React from "react"
import PropTypes from "prop-types"
import Stack from "./Stack.jsx"

class DeckCurve extends React.Component {
  render () {
    let { cards, handleClick, handleHover } = this.props
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
    let spells = total - lands - creatures
    let deckstacks = stacks.map((stack, i) => {
      if (stack.length > 0) {
        return <Stack key={i} cards={stack} handleClick={handleClick} handleHover={handleHover}/>
      }
    })

    return (
      <div id="deck-curve">
        <div className="info-bar">
          <span className="info-bar-text">Creatures: {creatures}</span>
          <span className="info-bar-text">Spells: {spells}</span>
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

export default DeckCurve
