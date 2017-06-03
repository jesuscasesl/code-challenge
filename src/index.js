import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './Components/App';

import createStore from './store/dev';
import reducers from './store/reducers/';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
