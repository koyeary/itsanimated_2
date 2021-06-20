import { combineReducers } from 'redux';
//import alert from './alert';
import auth from './auth/reducers/authReducer';
import inventory from './inventory/reducers/inventoryReducer';
import blog from './blog/reducers/blogReducer';
import stripe from './stripe/reducers/stripeReducer';


export default combineReducers({
  // alert
  auth,
  inventory,
  blog,
  stripe
  /*
     cart, 
     contact */
});
