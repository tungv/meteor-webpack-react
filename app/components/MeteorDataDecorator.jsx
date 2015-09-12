/* global ReactMeteorData */
import React          from 'react';

export default function MeteorData(getMeteorData) {
  const keys = [
    'componentWillMount',
    'componentWillUpdate',
    'componentWillUnmount'
  ]
  return (Component) => class extends React.Component {
    constructor(props) {
      super(props);

      keys.forEach((key) => {
        this[key] = ReactMeteorData[key];
      });

      this.getMeteorData = () => getMeteorData(props)
    }

    render() {
      const props = {
        ...this.props,
        meteorData: this.data
      }
      return <Component {...props} />;
    }
  }
}
