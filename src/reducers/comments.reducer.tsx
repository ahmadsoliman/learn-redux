import { AllComments, PostComment } from "../models";
import { AppActions, AddCommentOnPost, RemoveCommentFromPost } from "../types/actions.type";
import { ADD_COMMENT, REMOVE_COMMENT } from "../constants";

function postComment(state: PostComment[] = [], action: AddCommentOnPost) {
  return [
    ...state,
    {
      user: action.authorName,
      text: action.comment
    }
  ];
}

function deleteComment(state: PostComment[] = [], action: RemoveCommentFromPost) {
  return [
    ...state.slice(0, action.i),
    ...state.slice(action.i+1)
  ];
}

function comments(state: AllComments = {}, action: AppActions): AllComments {
  if (typeof action.postCode !== undefined) {
    switch (action.type) {
      case ADD_COMMENT:
        return {
          ...state,
          [action.postCode]: postComment(state[action.postCode], action)
        }
      case REMOVE_COMMENT:
        return {
          ...state,
          [action.postCode]: deleteComment(state[action.postCode], action)
        }
      default: return state;
    }
  }
  return state;
}

export default comments;