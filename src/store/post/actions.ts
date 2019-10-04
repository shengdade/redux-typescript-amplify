import { Post, CREATE_POST } from './types';

export function createPost(newPost: Post) {
  return {
    type: CREATE_POST,
    payload: newPost
  };
}
