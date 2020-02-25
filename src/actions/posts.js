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

const dismissPostUnsafe = post => ({
  type: types.DISMISS_POST,
  post
})

export const dismissPost = post => (dispatch, getState) => {
  dispatch(dismissPostUnsafe(post))
}
