import { combineReducers } from 'redux'
import _ from 'lodash'
import {
  RECEIVE_POSTS,
  DISMISS_POST,
  SELECT_POST
} from '../constants/posts'

const posts = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
      break
    case DISMISS_POST:
      return _.filter(state, post => post.id != action.post.id)
      break
    case SELECT_POST:
        return _.map(state, post => {
          let clonedPost = {...post}
          clonedPost.seen = clonedPost.seen || clonedPost.id === action.post.id
          return clonedPost
        })
      return state
      break
    default:
      return state
      break
  }
}

const selectedPostId = (state = '', action) => {
  switch (action.type) {
    case SELECT_POST:
      return action.post.id
      break
    case DISMISS_POST:
      return state === action.post.id ? '' : state
      break
    default:
      return state
      break
  }
}

export default combineReducers({
  posts,
  selectedPostId
})

export const getPosts = state => {
  return state.posts
}

const getSelectedPostFromPostList = (posts = [], selectedPostId = '') => {
  return _.find(posts, post => {return post.id === selectedPostId})
}

export const getSelectedPost = state => {
  const {selectedPostId} = state.posts
  return getSelectedPostFromPostList(state.posts.posts, selectedPostId)
}
