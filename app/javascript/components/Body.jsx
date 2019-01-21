import React from "react"
import PropTypes from "prop-types"
import Format from "./Format.jsx"
import Block from "./Block.jsx"

class Body extends React.Component {
  constructor() {
    super()

    this.state = {
      block: "grn",
      format: "draft",
      packs: [],
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
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      draft: {
        block: this.state.block,
        format: this.state.format
      }
    }

    $.ajax({
      type: "POST",
      url: "/api/v1/drafts.json",
      data: data,
      success: (packs) => {
        this.setState({ packs: packs })
        this.props.onStart()
        console.log(this.state.packs)
      }
    })
  }

  render () {
    let form
    if (!this.props.started) {
      form = (
        <form onSubmit={this.handleSubmit}>
          <Block onChange={this.handleChange} />
          <Format onChecked={this.handleChange} />
          <input type="submit" value="Start" />
        </form>
      )
    }
    
    return (
      <React.Fragment>
        {form}
      </React.Fragment>
    );
  }
}

export default Body
