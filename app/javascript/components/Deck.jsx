import React from "react"
import PropTypes from "prop-types"

class Deck extends React.Component {
  render () {
    let body
    if (this.props.cards) {
      let one = this.props.cards.filter(card => card.cmc < 2)
      body = one.map((card, i) => {
        return (
          <img className="card" src={card.imgurl} alt={card.name} key={i}/>
        )
      })
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
