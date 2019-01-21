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

  }

  newDraft = () => {

  }

  render () {
    return (
      <React.Fragment>
        <Header started={this.state.started} />
        <Body started={this.state.started} />
      </React.Fragment>
    );
  }
}

export default Main
