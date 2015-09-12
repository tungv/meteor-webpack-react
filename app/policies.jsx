import {Posts} from 'app/collections'

Posts.allow({
  insert() {
    return true
  }
})
