export const SET_POSTS = "SET_POSTS";
export const DEFAULT_POSTS = "DEFAULT_POSTS";
export const setPosts = payload => ({
  type: SET_POSTS,
  payload
});
export const defaultPosts = () => ({
  type: DEFAULT_POSTS
});
