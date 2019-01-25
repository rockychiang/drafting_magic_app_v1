import React from "react"
import PropTypes from "prop-types"

class TopPool extends React.Component {
  render () {
    let pool = this.props.packs.map((card, i) => {
      return (
        <img
          key={i}
          className="card"
          alt={card.name}
          title={card.name}
          src={card.imgurl}
          onClick={this.props.handleClick}
        />
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
