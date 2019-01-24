import React from "react"
import PropTypes from "prop-types"
import Header from "./Header.jsx"
import Body from "./Body.jsx"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      started: false,
      finished: false
    }
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
      <React.Fragment>
        <Header started={this.state.started} finished={this.state.finished} onNew={this.newDraft} />
        <Body started={this.state.started} finished={this.state.finished} onStart={this.startDraft} />
      </React.Fragment>
    );
  }
}

export default App
