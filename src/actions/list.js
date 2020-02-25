import api from '../api'
import * as types from '../constants/list'

const receiveItems = items => ({
  type: types.RECEIVE_ITEMS,
  items
})

export const getAllItems = () => (dispatch, getState) => {
  api.getItems(items => {
    console.log('getState()=', getState())
    const r = receiveItems(items);
    dispatch(r)
  })
}

const deleteItemUnsafe = item => ({
  type: types.DELETE_ITEM,
  item
})

export const deleteItem = item => (dispatch, getState) => {
  if (true /* Some validation over getState() and item*/) {
    dispatch(deleteItemUnsafe(item))
  }
}
