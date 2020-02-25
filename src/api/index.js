/**
 * client-server processing
 */
import _items from './items.json'
import axios from 'axios'
import _ from 'lodash' 
const TIMEOUT = 100


export default {
  getItems: (cb, action = 'todos' ,id = 1, timeout) => setTimeout(
    () => {
      // TODO: Handle errors
      //const url=`https://jsonplaceholder.typicode.com/${action}/${id}`;
      //axios.get(url).then( result => {
      //  cb([result.data])
      //})
      cb(_items)
    },
    timeout || 1000 // Simulate lag
  )
}
