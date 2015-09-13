/* global Iron */
import React from 'react'
import App from 'app/components/App'

console.log('Router');
// const clientRouter = new Iron.Router({autoStart: false})
const clientRouter = Router

clientRouter.route('/', function () {
  this.render('react', {
    data: {
      renderReact(tmpl) {
        const component = <div>Home</div>
        const rootElement = tmpl.$('.container:first')[0]
        React.render(component, rootElement);
      }
    }
  })
})

clientRouter.route('/app/:name', function() {

  const params = this.params

  this.layout('MasterLayout')

  this.render('react', {
    data: {
      renderReact(templateInstance) {
        const component = <App name={params.name} />
        const rootElement = templateInstance.$('.container:first')[0]
        React.render(component, rootElement);
      }
    }
  })

});

clientRouter.start()
