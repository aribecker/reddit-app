import React, { Component } from 'react'
import PostListContainer from './PostListContainer'
import LeftRightPanel from './LeftRightPanel'
import './App.scss';
import classNames from "classnames"

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const leftPanel = < PostListContainer/>
    const rightPanel = ( <div>
      Hello Right Panel!!!
      Hello Right Panel!!!
      Hello Right Panel!!! 
      Hello Right Panel!!!
      Hello Right Panel!!!<br/>
      Hello Right Panel!!!
      Hello Right Panel!!!
      Hello Right Panel!!! 
      Hello Right Panel!!!
      Hello Right Panel!!!<br/>
    </div>)
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
