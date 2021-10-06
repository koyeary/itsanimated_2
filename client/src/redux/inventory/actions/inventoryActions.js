import api from '../../../utils/api';
//import { setAlert } from './alert';
import {
  GET_PRODUCTS,
  PRODUCT_ERROR,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  GET_PRODUCT
} from './types';

// Get one product
export const getProduct = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/inventory/${id}`);

    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get products
export const getProducts = () => async (dispatch) => {
  try {
    const res = await api.get('/inventory');

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
/*     dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    }); */
  }
};


// Add product
export const addProduct = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await api.post('/inventory', formData, config);

    dispatch({
      type: ADD_PRODUCT,
      payload: res.data
    });

    //dispatch(setAlert('Product Created', 'success'));
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Update product
export const updateProduct = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await api.put(`/inventory`, formData, config);

    dispatch({
      type: UPDATE_PRODUCT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete product
export const deleteProduct = (id) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    await api.delete(`/inventory/${id}`, config);

    dispatch({
      type: DELETE_PRODUCT,
      payload: id
    });

    dispatch(`${id} removed`);
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

