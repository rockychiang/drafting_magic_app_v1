import React from "react"
import PropTypes from "prop-types"

class Title extends React.Component {
  render () {
    let newButton,layoutButton
    let { started, onNew, onLayoutChange } = this.props
    if (started) {
      newButton = <button className="top-btn" onClick={onNew}>New Draft</button>
      layoutButton = <button className="top-btn" onClick={onLayoutChange}>Change Deck Layout</button>
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
