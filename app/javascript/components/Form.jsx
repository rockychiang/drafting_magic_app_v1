import React from "react"
import PropTypes from "prop-types"
import Format from "./Format.jsx"
import Block from "./Block.jsx"

class Form extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      draft: {
        block: this.props.block,
        format: this.props.format
      }
    }

    $.ajax({
      type: "POST",
      url: "/api/v1/drafts.json",
      data: data,
      success: (packs) => {
        this.props.updatePacks(packs)
      }
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <Block onChange={this.props.handleChange} />
        <Format onChecked={this.props.handleChange} />
        <input type="submit" value="Start" />
      </form>
    );
  }
}

export default Form
