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

export const addToCart = (sessionId, productId, quantity) => async (dispatch) => {
  try {
    const res = await api.post(`/cart/${sessionId}`, {productId, quantity});

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

export const removeFromCart = (sessionId, productId) => async (dispatch) => {
  try {
    const res = await api.delete(`/cart/${sessionId}/${productId}`);

    dispatch({
      type: CART_REMOVE_ITEM,
      payload: res.data
    });

  } catch (err) {
    dispatch({
      type: CART_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const clearCart = (sessionId, productId) => async (dispatch) => {
  try {
    const res = await api.delete(`/cart/${sessionId}/${productId}`);

    dispatch({
      type: CART_CLEAR,
      payload: res.data
    });

  } catch (err) {
    dispatch({
      type: CART_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

