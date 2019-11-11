import React from 'react';
import { Link } from 'react-router';

import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const postCode = this.props.params.postCode;
    const post = this.props.posts.find((post) => post.code === postCode);
    const comments = this.props.comments[postCode] || [];

    return (
      <div className="single-photo">
        <Photo {...this.props} post={post}/>

        <Comments {...this.props} comments={comments} />
      </div>
    );
  }
});

export default Single;