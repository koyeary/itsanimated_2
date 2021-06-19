import { combineReducers } from 'redux';
//import alert from './alert';
import auth from './auth/reducers/authReducer';
import shop from './shop/reducers/shopReducer';
import blog from './blog/reducers/blogReducer';


export default combineReducers({
  // alert
  auth,
  shop,
  blog
  /*images,
     stripe,
     cart, 
     contact */
});
