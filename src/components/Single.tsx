import React from 'react';
import { withRouter } from 'react-router';

import Photo from './Photo';
import Comments from './Comments';
import { SingleProps } from '../types';
import { Post } from '../models';

class Single extends React.Component<SingleProps> {
  render() {
    const postCode = this.props.match.params.postCode;
    const post = this.props.posts.find((post: Post) => post.code === postCode) || Post.createNew();

    const comments = this.props.comments[postCode] || [];

    return (
      <div className="single-photo">
        <Photo post={post} comments={comments} incrementPostLikes={this.props.incrementPostLikes} />

        <Comments addCommentOnPost={this.props.addCommentOnPost} removeCommentFromPost={this.props.removeCommentFromPost} postCode={postCode} comments={comments} />
      </div>
    );
  }
};

export default withRouter(Single);