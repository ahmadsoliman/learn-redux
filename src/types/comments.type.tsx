import { PostComment } from "../models";
import { RemoveCommentFromPostAction, AddCommentOnPostAction } from "./actions.type";

export interface CommentProps {
  postCode: string,
  comment: PostComment,
  i: number,
  remComment: RemoveCommentFromPostAction
}

export interface CommentsProps {
  postCode: string,
  comments: PostComment[],
  addCommentOnPost: AddCommentOnPostAction,
  removeCommentFromPost: RemoveCommentFromPostAction
}

export interface CommentsState {
  commentForm: {
    author: string,
    comment: string
  }
}