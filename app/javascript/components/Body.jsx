import React from "react"
import PropTypes from "prop-types"
import Format from "./Format.jsx"
import Block from "./Block.jsx"

class Body extends React.Component {
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
      packs: []
    }, this.initialDraftState)
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
        this.setState(Object.assign({
          packs: packs
        }, this.initialDraftState))
        this.props.onStart()
        console.log(this.state)
      }
    })
  }

  render () {
    let body
    if (this.props.started) {
      body = this.state.packs[0].map((card) => {
        return (
          <img src={card.imgurl} alt={card.name} />
        )
      })
    } else {
      body = (
        <form onSubmit={this.handleSubmit}>
          <Block onChange={this.handleChange} />
          <Format onChecked={this.handleChange} />
          <input type="submit" value="Start" />
        </form>
      )
    }

    return (
      <React.Fragment>
        {body}
      </React.Fragment>
    );
  }
}

export default Body
