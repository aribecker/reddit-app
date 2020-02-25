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
      onPostDismiss,
      onPostSelect
    } = this.props
    return (
      <div
        onClick={(event) => {event.stopPropagation(); onPostSelect(post)}}
        className="post-list-item"
      >
        <PostItem
          post={post}
        />
        <button
          onClick={(event) => {event.stopPropagation(); onPostDismiss(post)}}
        >
          Dismiss Post
        </button>
        <hr/>
      </div>
    )
  }
}
