import React, { Component } from 'react'
import { connect } from 'react-redux'
import Details from '../components/Details'
import { getSelectedPost } from '../reducers/posts'

// Container-component pattern
class DetailsContainer extends Component {

  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
  }
  
  render() {
    return (
      <Details
        post= {this.props.post}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    post: getSelectedPost(state)
  }
}

export default connect(
  mapStateToProps,
  {
    getSelectedPost
  }
)(DetailsContainer)
