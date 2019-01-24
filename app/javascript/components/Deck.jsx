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
    }

    return (
      <React.Fragment>
        <div id="deck-pool">
          <div id="info-bar">
          </div>
          <div id="stacks">
            {onebody}
            {twobody}
            {threebody}
            {fourbody}
            {fivebody}
            {sixbody}
            {landbody}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Deck
