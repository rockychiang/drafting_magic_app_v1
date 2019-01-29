import React from "react"
import PropTypes from "prop-types"

class Format extends React.Component {
  render () {
    return (
      <React.Fragment>
        <label>Format:</label>
        <input type="radio" id="draft" name="format" value="draft" onChange={this.props.onChecked} defaultChecked />
        <label htmlFor="draft" className="light">Draft</label><br/>
        <input type="radio" id="sealed" name="format" value="sealed" onChange={this.props.onChecked} />
        <label htmlFor="sealed" className="light">Sealed</label><br />
      </React.Fragment>
    );
  }
}

export default Format
