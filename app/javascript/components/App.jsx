import React from "react"
import PropTypes from "prop-types"
import Title from "./Title.jsx"
import CardPool from "./CardPool.jsx"
import Form from "./Form.jsx"

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
    let cardpool
    if (this.state.started) {
      cardpool = <CardPool packs={this.state.packs[0]} />
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
          <div id="deck-pool">
            <div className="info-bar">
              <span>Lands:    Creatures:     Others:     Total: </span>
            </div>

            <div id="deck-stacks">

            </div>
          </div>

          <div id="side-pool">
            <div className="info-bar">
              <span>Sideboard: </span>
            </div>

            <div id="pool-stacks">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
