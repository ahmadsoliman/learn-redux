function postComment(state = [], action: any) {
  return [
    ...state,
    {
      user: action.authorName,
      text: action.comment
    }
  ];
}

function deleteComment(state: any = [], action: any) {
  return [
    ...state.slice(0, action.i),
    ...state.slice(action.i+1)
  ];
}

function comments(state: any = {}, action: any) {
  if (typeof action.postCode !== undefined) {
    switch (action.type) {
      case 'ADD_COMMENT':
        return {
          ...state,
          [action.postCode]: postComment(state[action.postCode], action)
        }
      case 'REMOVE_COMMENT':
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