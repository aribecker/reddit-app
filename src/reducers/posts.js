import { combineReducers } from 'redux'
import _ from 'lodash'
import {
  RECEIVE_POSTS,
  DISMISS_POST
} from '../constants/posts'

const posts = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
      break
    case DISMISS_POST:
      return _.filter(state, post => post.id != action.post.id)
      break
    default:
      return state
      break
  }
}

const otherStuff = (state = 0, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return 123
      break
    case DISMISS_POST:
      return 456
      break
    default:
      return state
      break
  }
}

export default combineReducers({
  posts,
  otherStuff
})

export const getPosts = state => {
  return state.posts
}
