import React from 'react';
import { withRouter } from 'react-router';

import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component<any, any> {
  render() {
    const postCode = (this.props as any).match.params.postCode;
    const post = (this.props as any).posts.find((post: any) => post.code === postCode);

    const comments = (this.props as any).comments[postCode] || [];

    return (
      <div className="single-photo">
        <Photo {...this.props} post={post}/>

        <Comments {...this.props} postCode={postCode} comments={comments} />
      </div>
    );
  }
};

export default withRouter(Single as any);