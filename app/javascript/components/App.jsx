import React from "react"
import PropTypes from "prop-types"
import Title from "./Title.jsx"
import TopPool from "./TopPool.jsx"
import Form from "./Form.jsx"
import Deck from "./Deck.jsx"
import SideBoard from "./SideBoard.jsx"
import takeCard from "../utils/takeCard.js"

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

  handleFormChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value })
  }

  getPacks = (packs) => {
    this.setState(Object.assign({ packs: packs }, this.initialDraftState))
    if (this.state.format === "sealed") {
      this.setState({
        side: this.state.packs
      })
    }
    this.startDraft()
    console.log(this.state)
  }

  handleTopPoolClick = (e) => {
    let pack
    if (this.state.format === "draft") {
      pack = this.state.packs[0]
    } else {
      pack = this.state.side
    }
    this.addCardToDeck(e.target.alt, this.state.side)
  }

  handleSidePoolClick = (e) => {
    this.addCardToDeck(e.target.alt, this.state.side)
  }

  addCardToDeck = (cardName, pack) => {
    let card = takeCard(cardName, pack)
    this.setState({
      deck: this.state.deck.concat(card)
    })
  }

  addCardToSide = (e) => {
    let card = takeCard(e.target.alt, this.state.deck)
    this.setState({
      side: this.state.side.concat(card)
    })
  }

  render () {
    let toppool, deck, sideboard, style, cards;
    if (this.state.started) {
      if (this.state.format === "draft") {
        sideboard = <SideBoard cards={this.state.side} handleClick={this.handleSidePoolClick} />
        style = { width: 'calc(100% - 195px)' }
        cards = this.state.packs[0]
      } else {
        style = { width: '100%' }
        cards = this.state.side
      }
      toppool = <TopPool packs={cards} handleClick={this.handleTopPoolClick} />
      deck = <Deck cards={this.state.deck} style={style} handleClick={this.addCardToSide} />
    } else {
      toppool = <Form getPacks={this.getPacks} handleChange={this.handleFormChange} block={this.state.block} format={this.state.format} />
    }

    return (
      <div id="app">
        <div id="top">
          <Title started={this.state.started} onNew={this.newDraft} />
          {toppool}
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
