import { Posts } from 'app/collections'

Meteor.publish('all_posts', function () {
  return Posts.find({})
})
