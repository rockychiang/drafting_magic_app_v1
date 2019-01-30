import React from "react"
import PropTypes from "prop-types"

class Preview extends React.Component {
  render () {
    return (
      <div id="preview-box">
        <div className="info-bar">
          <span className="info-bar-text">Card Preview</span>
        </div>
        <div id="card-preview">
          <img className="card" alt="card preview" title="card preview" src={this.props.preview} />
        </div>
      </div>
    );
  }
}

export default Preview
