import { CREATE_POST, FETCH_POSTS } from './types';
import { API, graphqlOperation } from 'aws-amplify';
import { createPost } from '../../graphql/mutations';
import { listPosts } from '../../graphql/queries';

export function addPost(title: string) {
  return async (dispatch: any) => {
    const input = {
      title,
      timestamp: new Date().getMilliseconds()
    };
    const response = await API.graphql(graphqlOperation(createPost, { input }));
    dispatch({ type: CREATE_POST, payload: response.data.createPost });
  };
}

export function fetchPosts() {
  return async (dispatch: any) => {
    const response = await API.graphql(
      graphqlOperation(listPosts, { limit: 100 })
    );
    dispatch({ type: FETCH_POSTS, payload: response.data.listPosts.items });
  };
}
