import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteItem, getAllItems } from '../actions'
import { getItems } from '../reducers/list'
import MyList from '../components/MyList'

// Container-component pattern
class MyListContainer extends Component {

  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.props.getAllItems();
  }
  
  render() {
    const {props} = this;
    return (
      <MyList
        items={props.items}
        title="My List Title"
        onItemDelete={props.deleteItem}
        onItemSelect={() => console.log('onItemSelect to be impemented')}
      />
    )
  }
}

const mapStateToProps = state => {
  //console.log('mapStateToProps');
  return {
    items: getItems(state.list),
    count: state.count
  }
}

export default connect(
  mapStateToProps,
  {
    deleteItem,
    getAllItems
  }
)(MyListContainer)
