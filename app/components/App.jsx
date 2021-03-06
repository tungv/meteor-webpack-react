import React from 'react';
import BaseComponent from './BaseComponent';
import MeteorData from './MeteorDataDecorator';
import {Users, Posts} from 'app/collections';
import './App.css';

@MeteorData(props =>  {
  Meteor.subscribe('all_posts')
  return {
    posts: Posts.find().fetch()
  };
})
class App extends BaseComponent {
  render() {
    return (
      <div className="App">
        <h1>Hello {this.props.name}!!!</h1>
        <p>There are {this.props.meteorData.posts.length} posts in the Minimongo  (autopublish removed)</p>
        <button onClick={()=>Posts.insert({name: 'new name'})}>new post</button>
      </div>
    );
  }
}

export default App
