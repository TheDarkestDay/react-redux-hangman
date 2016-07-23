import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import main from './reducers/main';
import App from './containers/app';
import { fetchWord } from './actions';

const store = createStore(main, compose(
  applyMiddleware(thunkMiddleware), 
  window.devToolsExtension ? window.devToolsExtension() : f => f)
);

store.dispatch(fetchWord());
render(<Provider store={store}> 
          <App /> 
       </Provider>, document.getElementById('app'));