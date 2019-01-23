import React from "react"
import PropTypes from "prop-types"
import Stack from "./Stack.jsx"

class Deck extends React.Component {
  render () {
    let body
    if (this.props.cards) {
      let one = this.props.cards.filter(card => card.cmc < 4)
      body = <Stack cards={one} />
    }

    return (
      <React.Fragment>
        <div id="deck">
          {body}
        </div>
      </React.Fragment>
    );
  }
}

export default Deck
