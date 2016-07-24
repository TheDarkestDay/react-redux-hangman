import React, { Component } from 'react';
import { ALPHABET } from '../constants';


export default class Keyboard extends Component {
  handleBtnClick(letter) {
    this.props.guessLetter(letter);
  }
  render() {
    return (
      <div>
        {ALPHABET.map( elem =>
          <button type="button" 
                  key={elem}
                  onClick={(letter) => this.handleBtnClick(elem)} 
                  disabled={this.props.usedLetters.indexOf(elem) > -1}>
            {elem}
          </button>
        )}
      </div>
    );
  }
}