import {
    GET_POSTS,
    BLOG_ERROR
  } from '../actions/types';
  
  const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
  };
  
  const blog = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_POSTS:
        return {
          ...state,
          posts: payload,
          loading: false
        };
      case BLOG_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      default:
        return state;
    }
  }

  export default blog;