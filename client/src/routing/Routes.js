import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Admin from '../components/pages/Admin';
import Home from '../components/pages/Home';
import Dashboard from '../components/shop/adminStorefront/Dashboard';
import Inventory from '../components/shop/adminStorefront/Inventory';
import PrivateRoute from './PrivateRoutes';

const Routes = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route path='/admin' component={Admin} /> 
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/inventory' component={Inventory} />
      </Switch>
    </Fragment>
  );
};

export default Routes;