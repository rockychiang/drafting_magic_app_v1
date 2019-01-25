import React from "react"
import PropTypes from "prop-types"
import Title from "./Title.jsx"
import TopPool from "./TopPool.jsx"
import Form from "./Form.jsx"
import Deck from "./Deck.jsx"
import SideBoard from "./SideBoard.jsx"
import addCardToDeck from "../utils/addCardToDeck.js"

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
      deck: [],
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

  handlePoolClick = (e) => {
    let card
    if (this.state.format === "draft") {
      card = addCardToDeck(e.target.alt, this.state.packs[0])
    } else {
      card = addCardToDeck(e.target.alt, this.state.packs)
    }
    this.setState( {
      deck: this.state.deck.concat(card)
    })
  }

  render () {
    let pool, deck, sideboard, style;
    if (this.state.started) {
      deck = <Deck cards={this.state.deck} style={style} />
      if (this.state.format === "draft") {
        pool = <TopPool packs={this.state.packs[0]} handleClick={this.handlePoolClick} />
        style = { width: 'calc(100% - 195px)' }
        sideboard = <SideBoard cards={this.state.packs[0]} />
      } else {
        pool = <TopPool packs={this.state.packs} handleClick={this.handlePoolClick} />
        style = { width: '100%' }
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
