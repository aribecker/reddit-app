import React, { Component } from 'react'
import './LeftRightPanel.scss'
import classNames from "classnames"

// Container-component pattern
export default class LeftRightPanel extends Component {

  constructor(props) {
    super(props)
    this.state = {
      leftPanelOpen: false
    }
  }

  openLeftPanel(event) {
    if (window.innerWidth < 768) {
      event.stopPropagation()
      this.setState({
        leftPanelOpen: true
      })
    }
  }

  closeLeftPanel() {
    this.setState({
      leftPanelOpen: false
    })
  }

  render() {
    const {props} = this;
    return (
      <div className="left-right-panel">
        <div
          className={classNames({
            left: true,
            'left-panel-open': this.state.leftPanelOpen
          })}
        >
          {props.leftPanel}
        </div>
        <div
          className="right"
          onClick = {() => this.closeLeftPanel()}
        >
          <button
            className="open-left-panel-button"
            onClick = {(event) => this.openLeftPanel(event)}
          >
            Open Left Panel
          </button>
          {props.rightPanel}
        </div>
      </div>
    )
  }
}

