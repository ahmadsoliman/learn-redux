import { INCREMENT_POST_LIKES, ADD_COMMENT, REMOVE_COMMENT } from "../constants";

export interface IncrementPostLikes {
  type: INCREMENT_POST_LIKES;
  postCode: string;
}

export type IncrementPostLikesAction = (postCode: string) => void;

export interface AddCommentOnPost {
  type: ADD_COMMENT;
  postCode: string;
  authorName: string;
  comment: string;
}

export type AddCommentOnPostAction = (postCode: string, authorName: string, comment: string) => void;

export interface RemoveCommentFromPost {
  type: REMOVE_COMMENT;
  postCode: string;
  i: number;
}

export type RemoveCommentFromPostAction = (postCode: string, i: number) => void;

export type AppActions = IncrementPostLikes | AddCommentOnPost | RemoveCommentFromPost;