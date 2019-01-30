import React from "react"
import PropTypes from "prop-types"

class Title extends React.Component {
  render () {
    let newButton,layoutButton
    if (this.props.started) {
      newButton = <button className="top-btn" onClick={this.props.onNew}>New Draft</button>
      layoutButton = <button className="top-btn" >Change Deck Layout</button>
    }

    return (
      <header>
        <h1>Drafting Magic</h1>
        <ol id="buttons">
          <li>{newButton}</li>
          <li>{layoutButton}</li>
        </ol>
      </header>
    );
  }
}

export default Title
