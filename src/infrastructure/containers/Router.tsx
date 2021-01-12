import React, { Suspense, lazy } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './history';

import { Spinner } from '../../pages/shared/components/Spinner/Spinner';

const Signup = lazy(() => import('../../pages/Signup/index') );
const Login = lazy(() => import('../../pages/Login/index') );

const Default = lazy(() => import('../../pages/default/App') );

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route
              exact
              path="/signup"
              component={Signup}
            />
            <Route
              exact
              path="/login"
              component={Login}
            />
            <Route
              exact
              path="/"
              component={Default}
            />
          </Suspense> 
        </Switch>
      </Router>
    )
  }
}

export default AppRouter