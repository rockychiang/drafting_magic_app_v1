import React from "react"
import PropTypes from "prop-types"
import Title from "./Title.jsx"
import TopPool from "./TopPool.jsx"
import Form from "./Form.jsx"
import Deck from "./Deck.jsx"
import Preview from "./Preview.jsx"
import Tabs from "./Tabs"
import takeCard from "../utils/takeCard.js"
import rotatePacks from "../utils/rotatePacks.js"
import CardBack from "images/MTG_Card_Back.jpg"

class App extends React.Component {
  constructor() {
    super()

    this.initialState= {
      block: "rna",
      format: "draft",
      packs: [],
      started: false,
      finished: false,
      preview: CardBack
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
    this.setState(this.initialState);
  }

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  getPacks = (packs) => {
    this.setState(Object.assign({ packs: packs }, this.initialDraftState));
    this.state.format === "sealed" && this.setState({ side: this.state.packs });
    this.startDraft();
  }

  handleCardHover = (e) => {
    this.setState({ preview: e.target.src })
  }

  handleTopPoolClick = (e) => {
    let pack = (this.state.format === "sealed" || this.state.finished) ? this.state.side : this.state.packs[0]
    this.addCardToDeck(e.target.alt, pack);

    if (this.state.format === "draft" && !this.state.finished) {
      rotatePacks(this.state.packs, this.state.pick);
      this.setState({ pick: this.state.pick + 1 });
      this.state.pick >= 45 && this.setState({ finished: true })
    }
  }

  handleSideboardClick = (e) => {
    this.addCardToDeck(e.target.alt, this.state.side);
  }

  addCardToDeck = (cardName, pack) => {
    let card = takeCard(cardName, pack);
    let updatedDeck = this.state.deck.concat(card);
    this.setState({ deck: updatedDeck });
  }

  addCardToSide = (e) => {
    let card = takeCard(e.target.alt, this.state.deck);
    let updatedSide = this.state.side.concat(card);
    this.setState({ side: updatedSide });
  }

  render () {
    let toppool, deck, preview;
    if (this.state.started) {
      let cards = (this.state.format === "sealed" || this.state.finished) ? this.state.side : this.state.packs[0]
          toppool = <TopPool cards={cards} handleClick={this.handleTopPoolClick} handleHover={this.handleCardHover} format={this.state.format} pick={this.state.pick} finished={this.state.finished}/>
          deck = (
            <Tabs>
              <div label="Main Deck">
                <Deck cards={this.state.deck} handleClick={this.addCardToSide} handleHover={this.handleCardHover} />
              </div>
              <div label="Sideboard">
                <Deck cards={this.state.side} handleClick={this.handleSideboardClick} handleHover={this.handleCardHover} />
              </div>
            </Tabs>
          )
          preview = <Preview preview={this.state.preview} />
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
          {preview}
        </div>
      </div>
    );
  }
}

export default App
