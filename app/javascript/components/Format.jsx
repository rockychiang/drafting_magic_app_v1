import React from "react"
import PropTypes from "prop-types"

class Format extends React.Component {
  render () {
    return (
      <React.Fragment>
        <label>
          Format:
          <input type="radio" name="format" value="draft" onChange={this.props.onChecked} defaultChecked />Draft
          <input type="radio" name="format" value="sealed" onChange={this.props.onChecked} />Sealed
        </label>
      </React.Fragment>
    );
  }
}

export default Format
