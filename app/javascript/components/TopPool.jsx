import React from "react"
import PropTypes from "prop-types"
import SortBy from "./SortBy.jsx"

class TopPool extends React.Component {
  constructor() {
    super()

    this.state = {
      sortBy: "color"
    }
  }

  onChange = (e) => {
    this.setState({ sortBy: e.target.value })
  }

  render () {
    let menu
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
