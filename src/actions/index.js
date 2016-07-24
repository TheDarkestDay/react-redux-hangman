import fetch from 'isomorphic-fetch';

export function guessLetter(letter) {
  return {
    type: 'LETTER_CHOOSEN',
    guess: letter
  }
}

function fetchingStarted() {
  return {
    type: 'FETCHING_STARTED'
  }
}

function fetchingFailed() {
  return {
    type: 'FETCHING_FAILED'
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
    return fetch('http://randomword.setgetgo.com/get.php')
      .then(response => {
        return response.text();
      })
      .then(data => {
        dispatch(fetchingComplete(data));
      })
      .catch(error => {
        dispatch(fetchingFailed(error));
      });
  };
}