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

        <div>
          {post.author}
        </div>

        <div>
          <img src={post.thumbnail}/>
        </div>
        
        <div>
          {post.title}
        </div>

      </div>
    )
  }
}
