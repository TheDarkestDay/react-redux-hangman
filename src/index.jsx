import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import main from './reducers/main';
import App from './containers/app';

const store = createStore(main, window.devToolsExtension && window.devToolsExtension());


render(<Provider store={store}> 
          <App /> 
       </Provider>, document.getElementById('app'));