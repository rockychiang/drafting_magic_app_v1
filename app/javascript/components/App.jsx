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
      bots: [ [], [], [], [], [], [], [] ],
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
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  getPacks = (packs) => {
    this.setState(Object.assign({ packs: packs }, this.initialDraftState))
    this.state.format === "sealed" && this.setState({ side: this.state.packs })
    this.startDraft()
  }

  handleTopPoolClick = (e) => {
    let pack = this.state.format === "draft" ? this.state.packs[0] : this.state.side
    this.addCardToDeck(e.target.alt, pack)

    if (this.state.format === "draft") {
      let pack = this.state.packs.shift();
      this.state.packs.splice(7, 0, pack)
      this.setState({
        pick: this.state.pick + 1
      })
    }
  }

  handleSidePoolClick = (e) => {
    this.addCardToDeck(e.target.alt, this.state.side)
  }

  addCardToDeck = (cardName, pack) => {
    let card = takeCard(cardName, pack);
    let updatedDeck = this.state.deck.concat(card);
    this.setState({ deck: updatedDeck });
  }

  addCardToSide = (e) => {
    let card = takeCard(e.target.alt, this.state.deck);
    let updatedSide = this.state.side.concat(card);
    this.setState({ side: updatedSide })
  }

  render () {
    let toppool, deck, sideboard;
    if (this.state.started) {
      let style = this.state.format === "draft" ? { width: 'calc(100% - 195px)' } : { width: '100%' }
      let topcards = this.state.format === "draft" ? this.state.packs[0] : this.state.side
          toppool = <TopPool cards={topcards} handleClick={this.handleTopPoolClick} format={this.state.format} pick={this.state.pick}/>
          deck = <Deck cards={this.state.deck} style={style} handleClick={this.addCardToSide} />
      if (this.state.format === "draft") {
        sideboard = <SideBoard cards={this.state.side} handleClick={this.handleSidePoolClick} />
      }
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
