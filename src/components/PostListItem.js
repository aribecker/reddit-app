import React, { Component } from 'react'
import PostItem from './PostItem'
import './PostListItem.scss';

export default class PostListItem extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {
      post,
      onPostDismiss
    } = this.props
    return (
      <div
        ref={this.postRef}
        className="post-list-item"
      >
        <PostItem
          post={post}
        />
        <button
          onClick={() => onPostDismiss(post)}
        >
          Dismiss Post
        </button>
        <hr/>
      </div>
    )
  }
}
