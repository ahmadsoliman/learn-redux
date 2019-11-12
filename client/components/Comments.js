import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(i) {
    const { postCode } = this.props;
    this.props.removeCommentFromPost(postCode, i);
  }
  
  render() {
    const { comment, i } = this.props;
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
  }
}

class Comments extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { postCode } = this.props;
    const authorName = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addCommentOnPost(postCode, authorName, comment);
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <div className="comments">
        {
          this.props.comments.map((comment, i) => {
            return <Comment {...this.props} comment={comment} i={i} key={i} />;
          })
        }
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