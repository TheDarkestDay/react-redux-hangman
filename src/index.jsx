import React, { Component } from 'react';
import { render } from 'react-dom';

class HelloMsg extends Component {
  render() {
    return (
      <h1> Bye! </h1>  
    )
  };
};

render(<HelloMsg />, document.getElementById('app'));