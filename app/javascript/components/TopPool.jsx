import React from "react"
import PropTypes from "prop-types"
import SortBy from "./SortBy.jsx"
import sortBy from "../utils/sortBy.js"

class TopPool extends React.Component {
  constructor() {
    super()

    this.state = {
      sortBy: "color",
      cards: []
    }
  }

  componentDidMount() {
    let cards = this.props.format === "draft" ? this.props.cards : sortBy("color", this.props.cards)
    this.setState({ cards: cards })
  }

  componentWillReceiveProps(nextProps) {
    let cards = this.props.format === "draft" ? nextProps.cards : sortBy(this.state.sortBy, nextProps.cards)
    this.setState({ cards: cards })
  }

  onChange = (e) => {
    this.setState({
      sortBy: e.target.value,
      cards: sortBy(e.target.value, this.state.cards)
    })
  }

  render () {
    let menu;
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

    if (this.props.format === "draft") {
      let pack = Math.ceil(this.props.pick/15);
      let pick = this.props.pick - (pack-1)*15;
          menu = <span> Pack: {pack} / Pick: {pick} </span>
    } else {
          menu = <label> Sort By: <SortBy onChange={this.onChange} /> </label>
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
