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
      onPostDismiss,
      onPostSelect
    } = this.props;
    return (
      <div
        className="post-list"
      >
        <h5>{title}</h5>
          {posts && posts.map(post => 
            <PostListItem
              key={post.id}
              post={post}
              onPostDismiss={onPostDismiss}
              onPostSelect={onPostSelect}
            />
          )}
      </div>
    )
  }
}
