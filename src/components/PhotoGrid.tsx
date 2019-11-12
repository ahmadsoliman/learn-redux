import React from 'react';
import Photo from './Photo';

class PhotoGrid extends React.Component<any, any> {
  render() {
    return (
      <div className="photo-grid">
        {
          (this.props as any).posts.map((post: any, i: number) =>
            <Photo {...this.props} key={i} post={post} />
          )
        }
      </div>
    );
  }
};

export default PhotoGrid;