import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store, { history } from './store';

import css from './styles/style.styl';

// components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path='/view/:postCode' component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
