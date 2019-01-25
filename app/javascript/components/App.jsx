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

    this.initialState= {
      block: "grn",
      format: "draft",
      packs: [],
      started: false,
      finished: false
    }

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

    this.state = Object.assign(this.initialState, this.initialDraftState)
  }

  startDraft = () => {
    this.setState({
      started: true,
      finished: false
    })
  }

  newDraft = () => {
    this.setState(this.initialState)
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
    let pool, deck, sideboard, style;
    if (this.state.started) {
      if (this.state.format === "draft") {
        pool = <TopPool packs={this.state.packs[0]} />
        style = { width: 'calc(100% - 195px)' }
        deck = <Deck cards={this.state.packs[0]} style={style} />
        sideboard = <SideBoard cards={this.state.packs[0]} />
      } else {
        pool = <TopPool packs={this.state.packs} />
        style = { width: '100%' }
        deck = <Deck cards={this.state.packs} style={style} />
      }
    } else {
      pool = <Form updatePacks={this.updatePacks} handleChange={this.handleChange} block={this.state.block} format={this.state.format} />
    }

    return (
      <div id="app">
        <div id="top">
          <Title started={this.state.started} onNew={this.newDraft} />
          {pool}
        </div>

        <div id="bottom">
          {deck}
          {sideboard}
        </div>
      </div>
    );
  }
}

export default App
