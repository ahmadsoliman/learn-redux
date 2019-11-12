import React from 'react';
import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router';

import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  render() {
    const postCode = this.props.match.params.postCode;
    const post = this.props.posts.find((post) => post.code === postCode);

    const comments = this.props.comments[postCode] || [];

    return (
      <div className="single-photo">
        <Photo {...this.props} post={post}/>

        <Comments {...this.props} postCode={postCode} comments={comments} />
      </div>
    );
  }
};

export default withRouter(Single);