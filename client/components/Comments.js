import React from 'react';
import { Link } from 'react-router';

import Photo from './Photo';
import comments from '../data/comments';

const Comment = React.createClass({
  handleDelete(i) {
    const { postCode } = this.props.params;
    this.props.removeCommentFromPost(postCode, i);
  },
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>: &nbsp;
          {comment.text}
          <button className="remove-comment" 
            onClick={() => this.handleDelete(i)}>
              &times;
          </button>
        </p>
      </div>
    );
  },
  handleSubmit(e) {
    e.preventDefault();
    const { postCode } = this.props.params;
    const authorName = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addCommentOnPost(postCode, authorName, comment);
    this.refs.commentForm.reset();
  },
  render() {
    
    return (
      <div className="comments">
        {this.props.comments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
});

export default Comment;