import './routing/client_routes'
import React from 'react';
import Hello from './components/Hello.jsx';

// GLOBAL: expose React to global
// ReactLayout needs this
window.React = React

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

console.log('Running on client only');
//
// Meteor.startup(() => {
//   React.render(<Hello/>, document.getElementById('root'));
// });
