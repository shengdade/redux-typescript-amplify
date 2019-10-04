import { PostState, CREATE_POST, PostActionTypes } from './types';

const initialState: PostState = {
  posts: []
};

export function postReducer(
  state = initialState,
  action: PostActionTypes
): PostState {
  switch (action.type) {
    case CREATE_POST:
      return {
        posts: [...state.posts, action.payload]
      };
    default:
      return state;
  }
}
