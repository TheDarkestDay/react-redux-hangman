import React, { Component } from 'react';

export default class HangmanPicture extends Component {
  render() {
    let picName = 'images/state'+this.props.errorsCount+'.png';
    return (
      <div>
        <img src={picName} width="150" height="150" />
      </div>
    );
  }
}