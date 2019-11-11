// increment
export function incrementPostLikes(postCode) {
  return {
    type: 'INCREMENT_POST_LIKES',
    postCode
  }
}

export function addCommentOnPost(postCode, authorName, comment) {
  return {
    type: 'ADD_COMMENT',
    postCode,
    authorName,
    comment
  }
}

export function removeCommentFromPost(postCode, i) {
  return {
    type: 'REMOVE_COMMENT',
    postCode,
    i
  }
}