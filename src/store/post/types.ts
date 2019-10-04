export interface Post {
  title: string;
  timestamp: number;
}

export interface PostState {
  posts: Post[];
}

export const CREATE_POST = 'CREATE_POST';

interface CreatePostAction {
  type: typeof CREATE_POST;
  payload: Post;
}

export type PostActionTypes = CreatePostAction;
