import React, { Component } from 'react'
import MyListContainer from './MyListContainer'
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="app">
        <MyListContainer />
      </div>
    )
  }

}

