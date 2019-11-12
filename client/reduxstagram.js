import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store, { history } from './store';

import css from './styles/style.styl';

// components
import App from './components/App';

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
)

render(router, document.getElementById('root'));
