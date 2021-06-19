import api from '../../../utils/api';

import {
    GET_POSTS,
    BLOG_ERROR
} from './types';

// Get posts

export const getPosts = () => async dispatch => {
    try {
        const res = await api.get('/tumblr');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        });

    } catch (err) {
        dispatch({ 
            type: BLOG_ERROR,
           // payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};