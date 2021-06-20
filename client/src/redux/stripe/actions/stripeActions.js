import api from '../../../utils/api';
//import { setAlert } from './alert';
import { CREATE_CHECKOUT, STRIPE_ERROR } from './types';

// Add product
export const createCheckout = (cart) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await api.post('/stripe/create-checkout-session', cart, config);

    dispatch({
      type: CREATE_CHECKOUT,
      payload: res.data
    });

    //dispatch(setAlert('Product Created', 'success'));
  } catch (err) {
    dispatch({
      type: STRIPE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const redirectCheckout = (session) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await api.post('/stripe/redirect-checkout', session, config);

    dispatch({
      type: CREATE_CHECKOUT,
      payload: res.data
    });

    //dispatch(setAlert('Product Created', 'success'));
  } catch (err) {
    dispatch({
      type: STRIPE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
