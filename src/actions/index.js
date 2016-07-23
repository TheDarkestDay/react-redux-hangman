import fetch from 'isomorphic-fetch';

export function guessLetter(letter) {
  return {
    type: 'LETTER_CHOOSEN',
    guess: letter
  }
}

function fetchingStarted() {
  return {
    type: 'FETCHING__STARTED'
  }
}

function fetchingFailed() {
  return {
    type: 'FETCHING__FAILED'
  }
}

function fetchingComplete(response) {
  return {
    type: 'FETCHING_COMPLETE',
    response
  }
}

export function fetchWord() { 
  return function(dispatch) {   
    dispatch(fetchingStarted());
    return fetch('/words.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        let randomIdx = Math.round(Math.random()*2);
        dispatch(fetchingComplete(data[randomIdx]));
      })
      .catch(error => {
        dispatch(fetchingFailed(error));
      });
  };
}