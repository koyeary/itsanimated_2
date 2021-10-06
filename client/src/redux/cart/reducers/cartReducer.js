import {
    GET_CART,
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_CLEAR,
    CART_ERROR
  } from '../actions/types';

  const initialState = {
    cart: null,
    loading: true
}

const cart = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
      case GET_CART:
      case CART_ADD_ITEM:
      case CART_REMOVE_ITEM:
        return {
          ...state,
          loading: false,
          cart: payload
      }
      case CART_CLEAR:
      case CART_ERROR:
        return {
          ...state,
          loading: false,
          cart: null
        }
      default:
        return state
    }
  };

  export default cart;