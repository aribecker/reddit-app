import { combineReducers } from 'redux'
import _ from 'lodash'; 
import {
  RECEIVE_ITEMS,
  DELETE_ITEM
} from '../constants/list'

const items = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.items
      break;
    case DELETE_ITEM:
      return _.filter(state, item => item.id != action.item.id)
      break;
    default:
      return state
      break;
  }
}

const otherStuff = (state = 0, action) => {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return 123
      break;
    case DELETE_ITEM:
      return 456
      break;
    default:
      return state
      break;
  }
}

export default combineReducers({
  items,
  otherStuff
})

export const getItems = state => {
  console.log('getItems state=', state)
  return state.items
}
