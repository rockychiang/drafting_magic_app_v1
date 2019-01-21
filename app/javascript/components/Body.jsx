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

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render () {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <Block onChange={this.handleChange} />
          <Format onChecked={this.handleChange} />
          <input type="submit" value="Start" />
        </form>
      </React.Fragment>
    );
  }
}

export default Body
