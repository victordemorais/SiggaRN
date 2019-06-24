import { SET_POSTS, DEFAULT_POSTS } from "../actions/posts";
const posts = (state = {}, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, ...action.payload };
    case DEFAULT_POSTS:
      return { state: {} };
    default:
      return state;
  }
};
export default posts;
