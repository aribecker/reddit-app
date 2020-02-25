import React, { Component } from 'react'
import PostListContainer from './PostListContainer'
import './App.scss';
import classNames from "classnames"

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="app">
        < PostListContainer/>
      </div>
    )
  }

}
