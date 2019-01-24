import React from "react"
import PropTypes from "prop-types"
import Title from "./Title.jsx"
import TopPool from "./TopPool.jsx"
import Form from "./Form.jsx"
import Deck from "./Deck.jsx"
import SideBoard from "./SideBoard.jsx"

class App extends React.Component {
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
      packs: [],
      started: false,
      finished: false
    }, this.initialDraftState)
  }

  startDraft = () => {
    this.setState({
      started: true,
      finished: false
    })
  }

  newDraft = () => {
    this.setState({
      started: false,
      finished: false
    })
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value })
  }

  updatePacks = (packs) => {
    this.setState(Object.assign({ packs: packs }, this.initialDraftState))
    this.startDraft()
    console.log(this.state)
  }

  render () {
    let cardpool, deckpool, sidepool;
    if (this.state.started) {
      if (this.state.format === "draft") {
        cardpool = <TopPool packs={this.state.packs[0]} />
        deckpool = <Deck cards={this.state.packs[0]} />
        sidepool = <SideBoard cards={this.state.packs[0]} />
      } else {
        cardpool = <TopPool packs={this.state.packs} />
        deckpool = <Deck cards={this.state.packs} />
      }
    } else {
      cardpool = <Form updatePacks={this.updatePacks} handleChange={this.handleChange} block={this.state.block} format={this.state.format} />
    }

    return (
      <div id="app">
        <div id="top">
          <Title started={this.state.started} onNew={this.newDraft} />
          {cardpool}
        </div>

        <div id="bottom">
          {deckpool}
          {sidepool}
        </div>
      </div>
    );
  }
}

export default App
