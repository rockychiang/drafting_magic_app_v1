import React from "react"
import PropTypes from "prop-types"

class Stack extends React.Component {
  render () {
    let stack = this.props.cards.map((card, i) => {
      let style = { top: i*27 + 'px' }

      return (
        <img className="card deck" src={card.imgurl} alt={card.name} key={i} style={style} />
      )
    })

    return (
      <React.Fragment>
        {stack}
      </React.Fragment>
    );
  }
}

export default Stack
