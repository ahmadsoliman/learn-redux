import React from 'react';

class Comment extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(i: number) {
    const { postCode } = this.props as any;
    (this.props as any).removeCommentFromPost(postCode, i);
  }

  render() {
    const { comment, i } = this.props as any;
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>: &nbsp;
          {comment.text}
          <button className="remove-comment" onClick={() => this.handleDelete(i)}>
            &times;
          </button>
        </p>
      </div>
    );
  }
}

class Comments extends React.Component<any, any> {

  constructor(props: any) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: any) {
    e.preventDefault();
    const { postCode } = this.props as any;
    const authorName = (this.refs.author as any).value;
    const comment = (this.refs.comment as any).value;
    (this.props as any).addCommentOnPost(postCode, authorName, comment);
    (this.refs.commentForm as any).reset();
  }

  render() {
    return (
      <div className="comments">
        {(this.props as any).comments.map((comment: any, i: number) => <Comment {...this.props} comment={comment} i={i} key={i} />)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
};

export default Comments;