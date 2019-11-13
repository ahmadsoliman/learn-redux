import { INCREMENT_POST_LIKES, ADD_COMMENT, REMOVE_COMMENT } from "../constants"
import { IncrementPostLikes, AddCommentOnPost, RemoveCommentFromPost } from "../types/actions.type"

export function incrementPostLikes(postCode: string): IncrementPostLikes {
  return {
    type: INCREMENT_POST_LIKES,
    postCode
  }
}

export function addCommentOnPost(postCode: string, authorName: string, comment: string): AddCommentOnPost {
  return {
    type: ADD_COMMENT,
    postCode,
    authorName,
    comment
  }
}

export function removeCommentFromPost(postCode: string, i: number): RemoveCommentFromPost {
  return {
    type: REMOVE_COMMENT,
    postCode,
    i
  }
}
