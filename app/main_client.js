import './routing/client_routes'
import React from 'react';
import BaseComponent from './components/BaseComponent.jsx';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

console.log('Running on client only');
//
// Meteor.startup(() => {
//   React.render(<BaseComponent/>, document.getElementById('root'));
// });
