import React, { Component } from 'react';
import Keyboard from '../components/keyboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HangmanActions from '../actions';
import HangmanPicture from '../components/hangman-picture';


class App extends Component {
  render() {
    return (
      <div>
        <HangmanPicture errorsCount={this.props.errorsCount}/>
        <h1>
          {this.props.wordMask}
        </h1>
        <Keyboard guessLetter={this.props.actions.guessLetter} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    wordMask: state.wordMask,
    errorsCount: state.errorsCount
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HangmanActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)