/* global Iron */
import React from 'react'
import BaseComponent from 'app/components/BaseComponent'
import App from 'app/components/App'
import MasterLayout from 'app/layouts/master'

window.React = React

console.log('Router');

function mapReactPages(pages, {defaultLayout, prefix}) {
  prefix = prefix || ''
  prefix = (__meteor_runtime_config__.ROOT_URL_PATH_PREFIX || '') + prefix
  for (page in reactPages) {
    const path = prefix + page.path
    Router.route(path, {
      name: page.name,
      action() {
        const params = this.params
        const queryParams = params.queryParams
        const components = page.components(params, queryParams)
        const layout = page.layout || defaultLayout
        if (!components || !layout) {
          console.warn(`lacking layout or components for route "${path}"`);
          this.next()
          return
        }

        ReactLayout.render(layout, components)
        this.render('react')
      }
    })
  }
}


const reactPages = [
  {
    name: 'Home',
    path: '/',
    components: (params, queryParams) => ({content: <div>Home!</div>})
  },
  {
    name: 'Hello',
    path: '/hello/:name',
    components: (params, queryParams) => ({content: <App {...params}/>})
  }
]


mapReactPages(reactPages, {
  defaultLayout: MasterLayout
})


Router.start()
