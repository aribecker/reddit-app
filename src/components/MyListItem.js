import React, { Component } from 'react'
import MyItem from './MyItem'
import './MyListItem.scss';

export default class MyListItem extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {
      item,
      onItemDelete
    } = this.props
    return (
      <div
        ref={this.itemRef}
        className="my-list-item"
        style={{ marginBottom: 20 }}
      >
        <MyItem
          id={item.id}
          title={item.title}
        />
        <button
          onClick={() => onItemDelete(item)}
        >
          Delete item
        </button>
      </div>
    )
  }
}

