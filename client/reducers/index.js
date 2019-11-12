import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import posts from './posts.reducer';
import comments from './comments.reducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  posts,
  comments
});

export default createRootReducer;