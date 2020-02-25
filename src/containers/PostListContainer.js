import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dismissPost, getAllPosts, selectPost } from '../actions'
import { getPosts } from '../reducers/posts'
import PostList from '../components/PostList'

// Container-component pattern
class PostListContainer extends Component {

  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.props.getAllPosts()
  }
  
  render() {
    const {props} = this;
    return (
      <PostList
        posts={props.posts}
        title="Reddit Posts"
        onPostDismiss={props.dismissPost}
        onPostSelect={props.selectPost}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: getPosts(state.posts)
  }
}

export default connect(
  mapStateToProps,
  {
    dismissPost,
    getAllPosts,
    selectPost
  }
)(PostListContainer)
