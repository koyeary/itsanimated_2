import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Admin from '../components/pages/Admin';
import Tumblr from '../components/tumblr/Tumblr';
import Dashboard from '../components/shop/adminStorefront/Dashboard';
import Inventory from '../components/shop/adminStorefront/Inventory';
import Product from '../components/shop/productDetails/Product';
/* import Cart from '../components/shop/userStorefront/Cart'; */
import PrivateRoute from './PrivateRoutes';

const Routes = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route path="/shop" component={Product} />
        {/* <Route path="/cart" component={Cart} /> */}
        <Route path='/admin' component={Admin} /> 
        <Route path='/blog' component={Tumblr}/>
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/inventory' component={Inventory} />
      </Switch>
    </Fragment>
  );
};

export default Routes;