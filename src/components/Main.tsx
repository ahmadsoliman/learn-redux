import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import PhotoGrid from './PhotoGrid';
import Single from './Single';
import { MainProps } from '../types';

class Main extends React.Component<MainProps> {
  render() {
    const { posts, comments, addCommentOnPost, removeCommentFromPost, incrementPostLikes } = this.props;
    return (
      <div>
        <h1>
          <Link to='/'>Reduxstagram</Link>
        </h1>

        <Switch>
          <Route exact={true} path='/'>
            <PhotoGrid posts={posts} comments={comments} incrementPostLikes={incrementPostLikes} />
          </Route>
          <Route path='/view/:postCode'>
            <Single posts={posts} comments={comments} addCommentOnPost={addCommentOnPost} removeCommentFromPost={removeCommentFromPost} incrementPostLikes={incrementPostLikes} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Main;
