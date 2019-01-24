import React from "react"
import PropTypes from "prop-types"

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
