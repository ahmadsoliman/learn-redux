import { RouteComponentProps, match } from "react-router";
import { Post, PostComment, AllComments } from "../models";
import { IncrementPostLikesAction, AddCommentOnPostAction, RemoveCommentFromPostAction } from "./actions.type";

export interface PhotoProps {
  post: Post;
  comments: PostComment[];
  incrementPostLikes: IncrementPostLikesAction;
}

export interface PhotoGridProps {
  posts: Post[];
  comments: AllComments;
  incrementPostLikes: IncrementPostLikesAction;
}

export interface SingleProps extends RouteComponentProps {
  match: match<{['postCode']: string}>;
  posts: Post[];
  comments: AllComments;
  incrementPostLikes: IncrementPostLikesAction;
  addCommentOnPost: AddCommentOnPostAction;
  removeCommentFromPost: RemoveCommentFromPostAction;
}

export interface MainProps {
  posts: Post[];
  comments: AllComments;
  addCommentOnPost: AddCommentOnPostAction;
  removeCommentFromPost: RemoveCommentFromPostAction;
  incrementPostLikes: IncrementPostLikesAction;
}