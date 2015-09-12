import {Posts} from 'app/collections'
import {createPosts, createUsers} from './fixtures'
import './method_example'
import './publications'
import './routing/server_routes.jsx'
import './policies'

// these will only run on the sever since we only 'import' them in main_server.js

if (!Posts.find().fetch().length) {
  createPosts()
  createUsers()
}

console.log('\n\nRunning on server only')
console.log('There are # posts:', Posts.find().fetch().length)
