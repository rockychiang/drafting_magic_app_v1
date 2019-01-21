import React from "react"
import PropTypes from "prop-types"
import Format from "./Format.jsx"
import Block from "./Block.jsx"

class Body extends React.Component {
  constructor() {
    super()

    this.state = {
      ongoing: false,
      block: "grn",
      format: "draft"
    }
  }

  render () {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <Block />
          <Format />
          <input type="submit" value="Start" />
        </form>
      </React.Fragment>
    );
  }
}

export default Body
