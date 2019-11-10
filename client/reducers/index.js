import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts.reducer';
import comments from './comments.reducer';

const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer
});

export default rootReducer;