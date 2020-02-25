/**
 * client-server processing
 */
//import _items from './items.json'
import axios from 'axios'
import _ from 'lodash' 
const TIMEOUT = 100


function getPostsFromData(data) {
  return _.map(
    data.children,
    post => {
      const {
        id,
        title,
        author,
        created_utc,
        thumbnail,
        name,
        url,
        num_comments
      } = post.data
      return {
        kind: post.kind,
        id,
        title,
        author,
        created_utc,
        thumbnail,
        name,
        url,
        num_comments
      }
    }
  )
}

export default {
  getPosts: (cb, timeout) => {
    setTimeout(
      () => {
        const url=`https://www.reddit.com/r/all/top.json?&limit=50`;
        axios.get(url).then( result => {
          cb(getPostsFromData(result.data.data))
        })
      },
      timeout || 100 // Simulate lag
    )
  }
}

