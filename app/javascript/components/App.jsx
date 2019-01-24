import React from "react"
import PropTypes from "prop-types"
import Header from "./Header.jsx"
import Body from "./Body.jsx"

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

  render () {
    return (
      <div className="app">
        <div className="top">
          <Header started={this.state.started} finished={this.state.finished} onNew={this.newDraft} />
          <Body started={this.state.started} finished={this.state.finished} onStart={this.startDraft} />
        </div>
        <div className="bottom">

        </div>
      </div>
    );
  }
}

export default App
