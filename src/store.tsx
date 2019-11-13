import { applyMiddleware, createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'

// root reducer
import createRootReducer from './reducers/index';

// data

import comments from './data/comments';
import posts from './data/posts';
import { AppStore } from './types';

export const history = createBrowserHistory();

// create default data
const defaultState: AppStore = {
  posts,
  comments
}

const store = createStore(
  createRootReducer(history),
  defaultState,
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      // ... other middlewares ...
    )
  )
);

export default store;
