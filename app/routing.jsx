import React from 'react'
import App from 'app/components/App'

console.log('FlowRouter');

FlowRouter.route('/app/:name', {
  action(params) {
    const rootElement = document.getElementById("root");
    React.render(<App name={params.name} />, rootElement);
  }
});

FlowRouter.initialize()
