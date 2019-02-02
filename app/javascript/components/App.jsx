import React from "react"
import PropTypes from "prop-types"
import Title from "./Title.jsx"
import TopPool from "./TopPool.jsx"
import Form from "./Form.jsx"
import DeckCurve from "./DeckCurve.jsx"
import DeckList from "./DeckList.jsx"
import Preview from "./Preview.jsx"
import Tabs from "./Tabs"
import takeCard from "../utils/takeCard.js"
import botPick from "../utils/botPick.js"
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
      normalLayout: true,
      preview: CardBack
    }

    this.initialDraftState = {
      deck: [],
      side: [],
      bots: [ [], [], [], [], [], [], [] ],
      pick: 1
    }

    this.state = Object.assign({}, this.initialState, this.initialDraftState)
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

  layoutChange = () => {
    this.setState({ normalLayout: !this.state.normalLayout })
    console.log(this.state.normalLayout)
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
    let pack = (this.state.format === "sealed" || this.state.finished) ? this.state.side : this.state.packs[7]
    this.addCardToDeck(e.target.alt, pack);

    if (this.state.format === "draft" && !this.state.finished) {
      let updatedBots = []
      this.state.bots.map((bot, i) => {
        let card = botPick(this.state.packs[i], this.state.pick)
        let updatedBot = this.state.bots[i].concat(card);
        updatedBots.push(updatedBot)
      })
      rotatePacks(this.state.packs, this.state.pick);
      this.setState({
        bots: updatedBots,
        pick: this.state.pick + 1
      });
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
    let toppool, deck, preview, panelOneId, panelTwoId, maindeck, sideboard;
    if (this.state.started) {
      if (this.state.normalLayout) {
        panelOneId = "panel-1-layout-1";
        panelTwoId = "panel-2-layout-1";
        maindeck = <DeckList cards={this.state.deck} handleClick={this.addCardToSide} handleHover={this.handleCardHover}  />
        sideboard = <DeckList cards={this.state.side} handleClick={this.handleSideboardClick} handleHover={this.handleCardHover} />
      } else {
        panelOneId = "panel-1-layout-2";
        panelTwoId = "panel-2-layout-2";
        maindeck = <DeckCurve cards={this.state.deck} handleClick={this.addCardToSide} handleHover={this.handleCardHover} />
        sideboard = <DeckCurve cards={this.state.side} handleClick={this.handleSideboardClick} handleHover={this.handleCardHover} />
      }
      let cards = (this.state.format === "sealed" || this.state.finished) ? this.state.side : this.state.packs[7]
      toppool = <TopPool cards={cards} handleClick={this.handleTopPoolClick} handleHover={this.handleCardHover} format={this.state.format} pick={this.state.pick} finished={this.state.finished} />
      preview = <Preview preview={this.state.preview} />

      if (this.state.format === "sealed" || this.state.finished) {
        deck = maindeck
      } else {
        deck = (
          <Tabs>
            <div label="Main Deck">
              {maindeck}
            </div>
            <div label="Sideboard">
              {sideboard}
            </div>
          </Tabs>
        )
      }
    } else {
      toppool = <Form getPacks={this.getPacks} handleChange={this.handleFormChange} block={this.state.block} format={this.state.format} />
    }

    return (
      <div id="app">
        <div id={panelOneId}>
          <Title started={this.state.started} onNew={this.newDraft} onLayoutChange={this.layoutChange}/>
          {toppool}
        </div>

        <div id={panelTwoId}>
          {deck}
          {preview}
        </div>
      </div>
    );
  }
}

export default App
