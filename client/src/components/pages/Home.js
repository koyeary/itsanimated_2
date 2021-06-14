import React, { Fragment } from 'react';
import Login from '../auth/Login';
import Header from '../navs/Header';

const Home = () => {
  return (
    <Fragment>
      <div>
        <h1>Home</h1>
      </div>
      <Login />
    </Fragment>
  );
};

export default Home;
