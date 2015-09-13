/* global Iron */
import React from 'react'
import MasterLayout from 'app/layouts/master'
import Hello from 'app/components/Hello'
import { Posts } from 'app/collections'

console.log('Flow Router');
const mainRouter = FlowRouter.group({
  prefix: __meteor_runtime_config__.ROOT_URL_PATH_PREFIX || '',
  name: 'main'
})

mainRouter.route('/', {
  name: 'home',
  action() {
    ReactLayout.render(MasterLayout, {content: <div>Home!</div>})
  }
})

mainRouter.route('/hello/:name', {
  name: 'hello',
  action(params) {
    ReactLayout.render(MasterLayout, {content: <Hello {...params}/>})
  }

});

mainRouter.route('/new_post', {
  name: 'new_post',
  triggersEnter: [(context, redirect) => {
    const name = context.queryParams.name || 'dynamic'
    Posts.insert({name})
    redirect(`/app/${ name }`)
  }]
});


FlowRouter.initialize()
