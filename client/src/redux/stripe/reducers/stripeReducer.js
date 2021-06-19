import {
    CREATE_CHECKOUT,
    STRIPE_ERROR
  } from '../actions/types';
  
  const initialState = {
    data: [],
    product: null,
    loading: true,
    error: {}
  };
  
  const stripe = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_CHECKOUT:
        return {
          ...state,
          data: [payload, ...state.data],
          loading: false
        };
      case STRIPE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      default:
        return state;
    }
  }

  export default stripe;