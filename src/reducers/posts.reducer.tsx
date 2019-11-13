import { Post } from "../models";

function posts(state: Post[] = [], action: any) {
  switch(action.type) {
    case 'INCREMENT_POST_LIKES':
      const i = state.findIndex((post) => post.code === action.postCode);
      return [
        ...state.slice(0, i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1)
      ]
    default: return state;
  }
}

export default posts;