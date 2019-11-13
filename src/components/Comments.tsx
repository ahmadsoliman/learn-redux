import React, { FormEvent } from 'react';
import { CommentProps, CommentsProps, CommentsState } from '../types';
import { PostComment } from '../models';

class Comment extends React.Component<CommentProps> {
  render() {
    const { comment, i, postCode, remComment } = this.props;
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>: &nbsp;
          {comment.text}
          <button className="remove-comment" onClick={() => remComment(postCode, i)}>
            &times;
          </button>
        </p>
      </div>
    );
  }
}

class Comments extends React.Component<CommentsProps, CommentsState> {

  constructor(props: CommentsProps) {
    super(props);

    this.state = {
      commentForm: {
        author: '',
        comment: ''
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { postCode, addCommentOnPost } = this.props;
    const authorName = this.state.commentForm.author;
    const comment = this.state.commentForm.comment;
    addCommentOnPost(postCode, authorName, comment);
    this.setState({
      commentForm: {
        author: '',
        comment: ''
      }
    });
  }

  handleFormChange(key: string) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        ...this.state,
        commentForm: {
          ...this.state.commentForm,
          [key]: event.target.value
        }
      });
    }
  }

  render() {
    const { comments, removeCommentFromPost, postCode } = this.props;
    const commentForm = this.state.commentForm;
    return (
      <div className="comments">
        {comments.map((comment: PostComment, i: number) => <Comment remComment={removeCommentFromPost} postCode={postCode} comment={comment} i={i} key={i} />)}

        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleFormChange('author')} value={commentForm.author} placeholder="author" />
          <input type="text" onChange={this.handleFormChange('comment')} value={commentForm.comment}  placeholder="comment" />
          <input type="submit" hidden={true} />
        </form>
      </div>
    );
  }
};

export default Comments;