import React from "react"
import PropTypes from "prop-types"
import Format from "./Format.jsx"
import Block from "./Block.jsx"

class Form extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()

    const { block, format, getPacks } = this.props
    const data = {
      draft: {
        block: block,
        format: format
      }
    }

    $.ajax({
      type: "POST",
      url: "/api/v1/drafts.json",
      data: data,
      success: (packs) => { getPacks(packs) }
    })
  }

  render () {
    const { handleSubmit, props: { handleChange }} = this;
    return (
      <form onSubmit={handleSubmit}>
        <Block onChange={handleChange} />
        <Format onChecked={handleChange} />
        <button type="submit">Start</button>
      </form>
    );
  }
}

export default Form
