import React from "react"
import PropTypes from "prop-types"
import Stack from "./Stack.jsx"

class Deck extends React.Component {
  render () {
    let onebody
    let twobody
    let threebody
    let fourbody
    let fivebody
    let sixbody
    let landbody
    let lands
    let creatures
    let total
    let others

    if (this.props.cards) {
      let one = this.props.cards.filter(card => card.cmc < 2 && !card.types.includes("Land"))
      let two = this.props.cards.filter(card => card.cmc === 2)
      let three = this.props.cards.filter(card => card.cmc === 3)
      let four = this.props.cards.filter(card => card.cmc === 4)
      let five = this.props.cards.filter(card => card.cmc === 5)
      let six = this.props.cards.filter(card => card.cmc > 5)
      let land = this.props.cards.filter(card => card.types.includes("Land"))
      onebody = <Stack cards={one} />
      twobody = <Stack cards={two}  />
      threebody = <Stack cards={three} />
      fourbody = <Stack cards={four} />
      fivebody = <Stack cards={five} />
      sixbody = <Stack cards={six} />
      landbody = <Stack cards={land} />
      lands = this.props.cards.filter(card => card.types.includes("Land")).length
      creatures = this.props.cards.filter(card => card.types.includes("Creature")).length
      total = this.props.cards.length
      others = total - lands - creatures
    }

    return (
      <React.Fragment>
        <div id="deck-pool">
          <div className="info-bar">
            <span>Lands: {lands}    Creatures: {creatures}    Others: {others}    Total: {total}</span>
          </div>
          <div id="deck-stacks">
            {onebody}
            {twobody}
            {threebody}
            {fourbody}
            {fivebody}
            {sixbody}
            {landbody}
          </div>
        </div>

        <div id="side-pool">
          <div className="info-bar">
            <span>Sideboard: {total}</span>
          </div>
          <div id="pool-stacks">
            {onebody}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Deck
