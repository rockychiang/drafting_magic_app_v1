import React from "react"
import PropTypes from "prop-types"
import Title from "./Title.jsx"
import Pool from "./Pool.jsx"
import Form from "./Form.jsx"
import DeckCurve from "./DeckCurve.jsx"
import DeckList from "./DeckList.jsx"
import Preview from "./Preview.jsx"
import Tabs from "./Tabs"
import takeCardBy from "../utils/takeCardBy.js"
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
  }

  getPacks = (newPacks) => {
    const { initialDraftState, startDraft, state: { format, packs }} = this;
    this.setState(Object.assign({ packs: newPacks }, initialDraftState));
    format === "sealed" && this.setState({ side: packs });
    startDraft();
  }

  handleCardHover = (e) => {
    this.setState({ preview: e.target.src });
  }

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  addCardTo = (target, cardName, pack) => {
    let card = takeCardBy("name", cardName, pack);
    let updatedTarget = this.state[target].concat(card);
    this.setState({ [target]: updatedTarget });
  }

  handleMaindeckClick = (e) => {
    this.addCardTo("side", e.target.alt, this.state.deck);
  }

  handlePoolClick = (e) => {
    const { bots, finished, format, packs, pick, side } = this.state;
    const pack = (format === "sealed" || finished) ? side : packs[7]
    this.addCardTo("deck", e.target.alt, pack);

    if (format === "draft" && !finished) {
      let updatedBots = [];
      bots.map((bot, i) => {
        let card = botPick(packs[i], pick);
        let updatedBot = bots[i].concat(card);
        updatedBots.push(updatedBot);
      })
      rotatePacks(packs, pick);
      this.setState({
        bots: updatedBots,
        pick: pick + 1
      });
      pick >= 45 && this.setState({ finished: true })
    }
  }

  handleSideboardClick = (e) => {
    this.addCardTo("deck", e.target.alt, this.state.side);
  }

  render () {
    const { getPacks, handleCardHover, handleFormChange, handleMaindeckClick,
      handleSideboardClick, handlePoolClick, layoutChange, newDraft,
      state: { block, deck, finished, format, normalLayout, packs, pick, preview, side, started } } = this;
    let poolPanel, deckPanel, previewPanel, panelOneId, panelTwoId, maindeck, sideboard;
    if (started) {
      if (normalLayout) {
        panelOneId = "panel-1-layout-1";
        panelTwoId = "panel-2-layout-1";
        maindeck = <DeckList cards={deck} handleClick={handleMaindeckClick} handleHover={handleCardHover}  />
        sideboard = <DeckList cards={side} handleClick={handleSideboardClick} handleHover={handleCardHover} />
      } else {
        panelOneId = "panel-1-layout-2";
        panelTwoId = "panel-2-layout-2";
        maindeck = <DeckCurve cards={deck} handleClick={handleMaindeckClick} handleHover={handleCardHover} />
        sideboard = <DeckCurve cards={side} handleClick={handleSideboardClick} handleHover={handleCardHover} />
      }
      let cards = (format === "sealed" || finished) ? side : packs[7]
      poolPanel = <Pool cards={cards} handleClick={handlePoolClick} handleHover={handleCardHover}
        format={format} pick={pick} finished={finished} />
      previewPanel = <Preview preview={preview} />

      if (format === "sealed" || finished) {
        deckPanel = maindeck;
      } else {
        deckPanel = (
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
      poolPanel = <Form getPacks={getPacks} handleChange={handleFormChange} block={block} format={format} />
    }

    return (
      <div id="app">
        <div id={panelOneId}>
          <Title started={started} onNew={newDraft} onLayoutChange={layoutChange}/>
          {poolPanel}
        </div>

        <div id={panelTwoId}>
          {deckPanel}
          {previewPanel}
        </div>
      </div>
    );
  }
}

export default App
