import React from "react"
import PropTypes from "prop-types"
import SortBy from "./SortBy.jsx"

class TopPool extends React.Component {
  constructor() {
    super()

    this.state = {
      sortBy: "color",
      cards: []
    }
  }

  componentDidMount() {
    this.setState({ cards: this.props.cards })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ cards: nextProps.cards })
  }

  onChange = (e) => {
    this.setState({ sortBy: e.target.value })
  }

  render () {
    let menu
    let pool = this.state.cards.map((card, i) => {
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

    if (this.props.format === "sealed") {
      menu = (
        <label>
          Sort By: <SortBy onChange={this.onChange} />
        </label>
      )
    }

    return (
      <div id="top-pool">
        <div id="top-pool-menu">
          {menu}
        </div>
        {pool}
      </div>
    );
  }
}

export default TopPool
