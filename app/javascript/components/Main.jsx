import React from "react"
import PropTypes from "prop-types"
import Header from "./Header.jsx"
import Body from "./Body.jsx"

class Main extends React.Component {
  constructor() {
    super()

    this.state = {
      started: false
    }
  }

  startDraft = () => {
    this.setState({
      started: true
    })
  }

  newDraft = () => {
    this.setState({
      started: false
    })
  }

  render () {
    return (
      <React.Fragment>
        <Header started={this.state.started} onNew={this.newDraft} />
        <Body started={this.state.started} onStart={this.startDraft} />
      </React.Fragment>
    );
  }
}

export default Main
