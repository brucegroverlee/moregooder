import React, { Suspense, lazy } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './history';

import { Spinner } from '../../pages/shared/components/Spinner/Spinner';
import { layout } from '../../pages/shared/components/layout';

const Signup = lazy(() => import('../../pages/Signup/index') );
const Login = lazy(() => import('../../pages/Login/index') );

//const layout = lazy(() => import('./Layout') );

const Default = lazy(() => import('../../pages/default/App') );

const AppRouter: React.FunctionComponent = () => {
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
            component={layout(Default)}
          />
        </Suspense> 
      </Switch>
    </Router>
  )
}

export default AppRouter