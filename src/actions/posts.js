import api from '../api'
import * as types from '../constants/posts'

const receivePosts = posts => ({
  type: types.RECEIVE_POSTS,
  posts
})

export const getAllPosts = () => (dispatch, getState) => {
  api.getPosts(posts => {
    const r = receivePosts(posts);
    dispatch(r)
  })
}

const dismissPostUnsafe = post => {
  return {
    type: types.DISMISS_POST,
    post
  }
}

export const dismissPost = post => (dispatch, getState) => {
  dispatch(dismissPostUnsafe(post))
}

const selectPostUnsafe = post => {
  return {
    type: types.SELECT_POST,
    post
  }
}

export const selectPost = post => {
  return (dispatch, getState) => {
    dispatch(selectPostUnsafe(post))
  }
}
