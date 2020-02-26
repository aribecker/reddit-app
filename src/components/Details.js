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
    if (!post) {
      return null
    }
    return (
      <div className="details">

        <div className="author">
          {post.author}
        </div>

        <div className="image">
          <img src={post.thumbnail}/>
        </div>
        
        <div className="title">
          {post.title}
        </div>

      </div>
    )
  }
}
