export interface Post {
  id: number;
  title: string;
  timestamp: number;
}

export interface PostState {
  posts: Post[];
}

export const CREATE_POST = 'CREATE_POST';
export const FETCH_POSTS = 'FETCH_POSTS';

interface CreatePostAction {
  type: typeof CREATE_POST;
  payload: Post;
}

interface FetchPostsAction {
  type: typeof FETCH_POSTS;
  payload: Post[];
}

export type PostActionTypes = CreatePostAction | FetchPostsAction;
