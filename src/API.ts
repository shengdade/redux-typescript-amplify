/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  title: string,
  timestamp: number,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  timestamp?: number | null,
};

export type DeletePostInput = {
  id?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  timestamp?: ModelIntFilterInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
};

export type CreatePostMutation = {
  createPost:  {
    __typename: "Post",
    id: string,
    title: string,
    timestamp: number,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
};

export type UpdatePostMutation = {
  updatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    timestamp: number,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
};

export type DeletePostMutation = {
  deletePost:  {
    __typename: "Post",
    id: string,
    title: string,
    timestamp: number,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost:  {
    __typename: "Post",
    id: string,
    title: string,
    timestamp: number,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      timestamp: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    timestamp: number,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    timestamp: number,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost:  {
    __typename: "Post",
    id: string,
    title: string,
    timestamp: number,
  } | null,
};
