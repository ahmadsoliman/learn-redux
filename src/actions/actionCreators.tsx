// increment
export function incrementPostLikes(postCode: string) {
  return {
    type: 'INCREMENT_POST_LIKES',
    postCode
  }
}

export function addCommentOnPost(postCode: string, authorName: string, comment: string) {
  return {
    type: 'ADD_COMMENT',
    postCode,
    authorName,
    comment
  }
}

export function removeCommentFromPost(postCode: string, i: number) {
  return {
    type: 'REMOVE_COMMENT',
    postCode,
    i
  }
}