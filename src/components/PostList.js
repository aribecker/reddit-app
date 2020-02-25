import React, { Component } from 'react'
import PostListItem from './PostListItem'
import './PostList.scss'

export default class PostList extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {
      title,
      posts,
      onPostDismiss
    } = this.props;
    return (
      <div
        className="post-list"
      >
        <h3>{title}</h3>
          {posts && posts.map(post => 
            <PostListItem
              key={post.id}
              post={post}
              onPostDismiss={onPostDismiss}
            />
          )}
      </div>
    )
  }
}
