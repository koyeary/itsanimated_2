import api from '../../../utils/api';
import { GET_CART, CART_ADD_ITEM, CART_REMOVE_ITEM, CART_CLEAR, CART_ERROR } from './types';

export const getCart = (sessionId) => async (dispatch) => {
  try {
    const res = await api.get(`/cart/${sessionId}`);

    dispatch({
      type: GET_CART,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CART_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

export const addToCart = (sessionId) => async (dispatch) => {
  try {
    const res = await api.post(`/cart/${sessionId}`);

    dispatch({
      type: CART_ADD_ITEM,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CART_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const removeFromCart = (sessionId) => async (dispatch) => {
  try {
    await api.delete(`/cart/${sessionId}`);

    dispatch({
      type: CART_REMOVE_ITEM,
      payload: sessionId
    });

  } catch (err) {
    dispatch({
      type: CART_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const clearCart = (sessionId, id) => async (dispatch) => {
  try {
    await api.delete(`/cart/${sessionId}/${id}`);

    dispatch({
      type: CART_CLEAR,
      payload: id
    });

  } catch (err) {
    dispatch({
      type: CART_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

