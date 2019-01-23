import React from "react"
import PropTypes from "prop-types"
import Form from "./Form.jsx"
import Deck from "./Deck.jsx"

class Body extends React.Component {
  constructor() {
    super()

    this.initialDraftState = {
      main: [],
      side: [],
      bot1: [],
      bot2: [],
      bot3: [],
      bot4: [],
      bot5: [],
      bot6: [],
      bot7: [],
      pick: 1
    }

    this.state = Object.assign({
      block: "grn",
      format: "draft",
      packs: []
    }, this.initialDraftState)
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value })
  }

  updatePacks = (packs) => {
    this.setState(Object.assign({
      packs: packs
    }, this.initialDraftState))
    this.props.onStart()
    console.log(this.state)
  }

  render () {
    let body

    if (this.props.started) {
      body = this.state.packs[0].map((card, i) => {
        return (
          <img className="card" src={card.imgurl} alt={card.name} key={i}/>
        )
      })
    } else {
      body = <Form updatePacks={this.updatePacks} handleChange={this.handleChange} block={this.state.block} format={this.state.format} />
    }

    return (
      <React.Fragment>
        {body}
        <Deck />
      </React.Fragment>
    );
  }
}

export default Body
