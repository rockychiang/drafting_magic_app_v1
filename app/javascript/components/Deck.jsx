import React from "react"
import PropTypes from "prop-types"

class Deck extends React.Component {
  render () {
    let body
    if (this.props.cards) {
      let one = this.props.cards.filter(card => card.cmc < 4)
      body = one.map((card, i) => {
        let style = {
          top: i*27 + 'px'
        }
        return (
          <img className="card deck" src={card.imgurl} alt={card.name} key={i} style={style} />
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
