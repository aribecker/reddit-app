import React from 'react'
import moment from 'moment'

const PostItem = (props) => {
  const {
    kind,
    id,
    title,
    author,
    created_utc,
    thumbnail,
    name,
    url,
    num_comments
  } = props.post
  
  return (
    <div>
      <div>
        <div>
          {author}
        </div>
        <div>
          {moment(created_utc * 1000).fromNow()}
        </div>
      </div>

      <div>
        <div>
          <img src={thumbnail}/>
        </div>
        <div>
          {title}
        </div>
      </div>

      <div>
        <div>
          {num_comments} Comments
        </div>
      </div>

    </div>
  )
}

export default PostItem
