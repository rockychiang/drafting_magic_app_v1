import React from "react"
import PropTypes from "prop-types"
import sortBy from "../utils/sortBy.js"

class Stack extends React.Component {
  render () {
    let count = this.props.cards.length || ""
    let stack = sortBy("name", this.props.cards).map((card, i) => {
      let style = { top: 20+i*27 + 'px' }

      return (
        <img
          key={i}
          className="card deck"
          alt={card.name}
          src={card.imgurl}
          style={style}
          onClick={this.props.handleClick}
        />
      )
    })

    return (
      <div className="stack">
        <p className="count">{count}</p>
        {stack}
      </div>
    );
  }
}

export default Stack
