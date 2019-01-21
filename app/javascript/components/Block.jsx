import React from "react"
import PropTypes from "prop-types"

class Block extends React.Component {
  render () {
    return (
      <React.Fragment>
        <label>
          Set:
          <select id="block" name="block" onChange={this.props.onChange} defaultValue="grn">
            <option value="rna" disabled>Ravnica Allegiance (coming soon)</option>
            <option value="grn" >Guilds of Ravnica</option>
            <option value="dom" disabled>Dominaria (coming soon)</option>
          </select>
        </label>
      </React.Fragment>
    );
  }
}

export default Block
