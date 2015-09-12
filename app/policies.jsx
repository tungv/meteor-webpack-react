import {Posts} from 'app/collections';

Posts.allows({
  insert() {
    return true
  }
})
