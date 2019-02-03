import React from "react"
import PropTypes from "prop-types"
import SortBy from "./SortBy.jsx"
import sortBy from "../utils/sortBy.js"

class Pool extends React.Component {
  constructor() {
    super()

    this.state = {
      sortCategory: "color",
      cards: []
    }
  }

  componentDidMount() {
    const { cards, format } = this.props;
    let poolCards = format === "draft" ? cards : sortBy("color", cards)
    this.setState({ cards: poolCards })
  }

  componentWillReceiveProps(nextProps) {
    const { props: { finished, format }, state: { sortCategory } } = this;
    let cards = (format === "draft" && !finished) ? nextProps.cards : sortBy(sortCategory, nextProps.cards)
    this.setState({ cards: cards })
  }

  handleChange = (e) => {
    this.setState({
      sortCategory: e.target.value,
      cards: sortBy(e.target.value, this.state.cards)
    })
  }

  render () {
    const { handleChange, props: { finished, format, handleClick, handleHover, pick }, state: { cards } } = this;
    let menu;
    let pool = cards.map((card, i) => {
      return (
        <img
          key={i}
          className="card"
          alt={card.name}
          title={card.name}
          src={card.imgurl}
          onClick={handleClick}
          onMouseOver={handleHover}
        />
      )
    })

    if (format === "draft" && !finished) {
      let packNo = Math.ceil( pick / 15 );
      let pickNo = pick - ( packNo - 1 ) * 15;
      menu = <span className="menu">Pack: {packNo} / Pick: {pickNo}</span>
    } else {
      menu = <label className="menu">Sort By:<SortBy onChange={handleChange} /></label>
    }

    return (
      <div id="pool">
        <div id="pool-menu">
          {menu}
        </div>
        {pool}
      </div>
    );
  }
}

export default Pool
