const initialState =
{
    errorsCount: 0,
    usedLetters: [],
    wordToGuess: '',
    wordMask: '*'
}

export default function main(state = initialState, action) {
  console.log(state);
  switch(action.type) {
    case 'LETTER_CHOOSEN':
      if (state.wordToGuess.indexOf(action.guess) > -1) {
        let newMask = '';
        for (let i=0;i<state.wordMask.length;i++) {
          state.wordToGuess[i] == action.guess ? newMask += action.guess : newMask += state.wordMask[i];
        }
        return Object.assign({}, state, {wordMask: newMask});
      } else {
        return Object.assign({}, state, {errorsCount: state.errorsCount + 1});
      }
    case 'FETCHING_COMPLETE':
      return Object.assign({}, state, {
        wordToGuess: action.response,
        wordMask: state.wordMask.repeat(action.response.length)
      }) 
    default:
      return state;  
  }
}