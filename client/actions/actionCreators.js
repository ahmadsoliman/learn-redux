// increment
function incrementPostLikes(postId) {
  return {
    type: 'INCREMENT_POST_LIKES',
    postId
  }
}

function addCommentOnPost(postId, authorName, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    authorName,
    comment
  }
}

function removeCommentFromPost(postId, commentIndex) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    commentIndex
  }
}