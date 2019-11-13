import  {bindActionCreators, AnyAction, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Main from './Main';
import { AppStore } from '../types/redux.type';

function mapStateToProps(state: AppStore) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;