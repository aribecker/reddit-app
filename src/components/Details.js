import React, { Component } from 'react'
import './Details.scss';

export default class Details extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {
      post
    } = this.props
    return (
      <div className="details">
        {JSON.stringify(post)}
      </div>
    )
  }
}
