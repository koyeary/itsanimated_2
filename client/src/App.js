import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/navs/Header';
import Home from './components/pages/Home';

// Redux
import { Provider } from 'react-redux';
import store from './store';
//import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
//import { LOGOUT } from './actions/types';

const App = () => {
   useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
   // store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ /* type: LOGOUT */ });
    });
  }, []); 

  return (
      <Router>
              <Header/>
              <Home/>
      </Router>
  );
};

export default App;