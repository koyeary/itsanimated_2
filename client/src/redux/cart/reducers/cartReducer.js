import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_CLEAR,
    CART_ERROR
  } from '../actions/types';

  
const cart = (state = {cartItems: []}, action) => {
    const { type, payload } = action;

    switch (type) {
      case CART_ADD_ITEM:
        const item = payload;

        const existItem = state.cartItems.find((x) => x.name === item.name);

        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((x) => 
            x.name === existItem.name ? item: x)
          }
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item]
          }
        }
      case CART_REMOVE_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.product !== payload),
        }
      case CART_CLEAR:
        return {
          ...state,
          cartItems: [],
        }
      default:
        return state
    }
  };

  export default cart;