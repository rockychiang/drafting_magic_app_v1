import React from "react"
import PropTypes from "prop-types"

class TopPool extends React.Component {
  render () {
    let pool = this.props.packs.map((card, i) => {
      return (
        <img className="card" src={card.imgurl} title={card.name} alt={card.name} key={i}/>
      )
    })

    return (
      <div id="top-pool">
        {pool}
      </div>
    );
  }
}

export default TopPool
