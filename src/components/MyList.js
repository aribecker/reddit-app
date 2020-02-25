import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MyListItem from './MyListItem'

export default class MyList extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    const {
      title,
      items,
      onItemDelete
    } = this.props;
    return (
      <div>
        <h3>{title}</h3>
          {items && items.map(item => 
            <MyListItem
              key={item.id}
              item={item}
              onItemDelete={onItemDelete}
            />
          )}
      </div>
    )
  }
}

