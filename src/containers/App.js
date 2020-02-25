import React, { Component } from 'react'
import PostListContainer from './PostListContainer'
import LeftRightPanel from './LeftRightPanel'
import DetailsContainer from './DetailsContainer'
import './App.scss';
import classNames from "classnames"

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const leftPanel = < PostListContainer/>
    const rightPanel = <DetailsContainer/>
    return (
      <div className="app">
        < LeftRightPanel
          leftPanel = {leftPanel}
          rightPanel = {rightPanel}
        />
      </div>
    )
  }

}
