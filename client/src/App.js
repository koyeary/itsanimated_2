import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Routes from './routing/Routes';
import MainNav from './components/navs/MainNav';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './redux/auth/actions/authActions';
import setAuthToken from './utils/setAuthToken';
import { LOGOUT } from './redux/auth/actions/types';

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);

      store.dispatch(loadUser());

      // log user out from all tabs if they log out in one tab
      window.addEventListener('storage', () => {
        if (!localStorage.token) store.dispatch({ type: LOGOUT });
      });
    }
  }, []);

  return (
    <Provider store={store}>
        <MainNav/>
      <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route component={Routes} />
          </Switch>
      </Router>
    </Provider>
  );
};

export default App;
