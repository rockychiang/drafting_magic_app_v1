import React from "react"
import PropTypes from "prop-types"
import Form from "./Form.jsx"
import Deck from "./Deck.jsx"

class TopPool extends React.Component {
  render () {
    let pool = this.props.packs.map((card, i) => {
      return (
        <img className="card" src={card.imgurl} alt={card.name} key={i}/>
      )
    })

    return (
      <div className="top-pool">
        {pool}
      </div>
    );
  }
}

export default TopPool
