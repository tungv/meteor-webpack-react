Meteor.publish('all_posts', function () {
  return Posts.find({})
})
