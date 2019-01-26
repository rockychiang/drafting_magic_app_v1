import React from "react"
import PropTypes from "prop-types"

class SortBy extends React.Component {
  render () {
    return (
      <React.Fragment>
        <select className="sort" name="sort" onChange={this.props.onChange} defaultValue="color">
          <option value="color">Color</option>
          <option value="cmc">CMC</option>
          <option value="rarity">Rarity</option>
        </select>
      </React.Fragment>
    );
  }
}

export default SortBy
