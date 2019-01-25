import React from "react"
import PropTypes from "prop-types"

class Stack extends React.Component {
  render () {
    let stack = this.props.cards.sort((a, b) => {return a.name - b.name}).map((card, i) => {
      let style = { top: 20+i*27 + 'px' }

      return (
        <img className="card deck" src={card.imgurl} alt={card.name} key={i} style={style} onClick={this.props.handleClick} />
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
