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
    if (this.props.cards) {
      let one = this.props.cards.filter(card => card.cmc < 2)
      let two = this.props.cards.filter(card => card.cmc === 2)
      let three = this.props.cards.filter(card => card.cmc === 3)
      let four = this.props.cards.filter(card => card.cmc === 4)
      let five = this.props.cards.filter(card => card.cmc === 5)
      let six = this.props.cards.filter(card => card.cmc > 5)
      onebody = <Stack cards={one} />
      twobody = <Stack cards={two}  />
      threebody = <Stack cards={three} />
      fourbody = <Stack cards={four} />
      fivebody = <Stack cards={five} />
      sixbody = <Stack cards={six} />
    }

    return (
      <React.Fragment>
        <div id="deck">
          {onebody}
          {twobody}
          {threebody}
          {fourbody}
          {fivebody}
          {sixbody}
        </div>
      </React.Fragment>
    );
  }
}

export default Deck
