import React from 'react';
import Photo from './Photo';
import { PhotoGridProps } from '../types';
import { Post, PostComment } from '../models';

class PhotoGrid extends React.Component<PhotoGridProps> {
  renderPhoto(post: Post, i: number, postComments: PostComment[]) {
    return <Photo key={i} post={post} comments={postComments} incrementPostLikes={this.props.incrementPostLikes}/>;
  }

  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post: Post, i: number) => this.renderPhoto(post, i, this.props.comments[post.code]) )}
      </div>
    );
  }
};

export default PhotoGrid;