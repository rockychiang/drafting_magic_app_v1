import React from "react"
import PropTypes from "prop-types"

class Stack extends React.Component {
  render () {
    let stack = this.props.cards.sort((a, b) => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      return 0;
    }).map((card, i) => {
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
        <p className="count">{this.props.cards.length}</p>
        {stack}
      </div>
    );
  }
}

export default Stack
