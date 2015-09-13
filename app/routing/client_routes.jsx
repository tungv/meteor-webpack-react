/* global Iron */
import React from 'react'
import App from 'app/components/App'

console.log('Router');
const clientRouter = new Iron.Router({autoStart: false})

clientRouter.route('/app/:name', function() {

  const params = this.params

  this.render('react', {
    data: {
      render(templateInstance) {
        const component = <App name={params.name} />
        const rootElement = templateInstance.$('.container:first')[0]
        React.render(component, rootElement);
      }
    }
  })

});

clientRouter.start()
