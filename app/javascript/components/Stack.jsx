import React from "react"
import PropTypes from "prop-types"
import sortBy from "../utils/sortBy.js"

class Stack extends React.Component {
  render () {
    let { cards, handleClick, handleHover } = this.props
    let count = cards.length || ""
    let stack = sortBy("color", cards).map((card, i) => {
      let style = { top: 20+i*25 + 'px' }

      return (
        <img
          key={i}
          className="card deck"
          alt={card.name}
          src={card.imgurl}
          style={style}
          onClick={handleClick}
          onMouseOver={handleHover}
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
