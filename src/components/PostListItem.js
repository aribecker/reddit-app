import React, { Component } from 'react'
import moment from 'moment'
import './PostListItem.scss';
import classNames from "classnames"

export default class PostListItem extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {
      post,
      onPostDismiss,
      onPostSelect
    } = this.props
    
    const {
      kind,
      id,
      title,
      author,
      created_utc,
      thumbnail,
      name,
      url,
      num_comments,
      seen
    } = post
    
    return (
      <div
        onClick={(event) => {event.stopPropagation(); onPostSelect(post)}}
        className="post-list-item"
      >


        <div 
         className={classNames({
            'post-item': true,
            'seen': seen
          })}
        >

          <div class="padded-row">
            <div class="author">
              {author}
            </div>
            <div class="created">
              {moment(created_utc * 1000).fromNow()}
            </div>
          </div>

          <div class="padded-row">
            <div className="thumbnail">
              <img src={thumbnail}/>
            </div>
            <div className="title">
              {title}
            </div>
          </div>

          <div>

          <div
            className="dismiss"
            onClick={(event) => {event.stopPropagation(); onPostDismiss(post)}}
          >
            Dismiss Post
          </div>

            <div className="comments">
              {num_comments} Comments
            </div>
          </div>
        </div>
        
        <hr/>
      </div>
    )
  }
}
