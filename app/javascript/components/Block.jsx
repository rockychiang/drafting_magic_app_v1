import React from "react"
import PropTypes from "prop-types"

class Block extends React.Component {
  render () {
    return (
      <React.Fragment>
        <label htmlFor="block">Set:</label>
        <select id="block" name="block" onChange={this.props.onChange} defaultValue="rna">
          <option value="rna" >Ravnica Allegiance</option>
          <option value="grn" >Guilds of Ravnica</option>
          <option value="dom" disabled>Dominaria (coming soon)</option>
        </select>
      </React.Fragment>
    );
  }
}

export default Block
