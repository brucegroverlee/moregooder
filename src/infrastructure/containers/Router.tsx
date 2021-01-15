import React, { Suspense, lazy } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './history';

import { Spinner } from '../../pages/shared/components/Spinner/Spinner';
import { layout } from '../../pages/shared/components/layout';

const Signup = lazy(() => import('../../pages/Signup/index') );
const Login = lazy(() => import('../../pages/Login/index') );

//const layout = lazy(() => import('./Layout') );

const Home = lazy(() => import('../../pages/Home') );
const Texting = lazy(() => import('../../pages/Texting') );
const Contacts = lazy(() => import('../../pages/Contacts') );
const ContactsCreate = lazy(() => import('../../pages/ContactsCreate') );
const Forms = lazy(() => import('../../pages/Forms') );
const FormsCreate = lazy(() => import('../../pages/FormsCreate') );

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
            path="/texting"
            component={layout(Texting)}
          />
          <Route
            exact
            path="/contacts"
            component={layout(Contacts)}
          />
          <Route
            exact
            path="/contacts/create"
            component={layout(ContactsCreate)}
          />
          <Route
            exact
            path="/forms"
            component={layout(Forms)}
          />
          <Route
            exact
            path="/forms/create"
            component={layout(FormsCreate)}
          />
          <Route
            exact
            path="/"
            component={layout(Home)}
          />
        </Suspense> 
      </Switch>
    </Router>
  )
}

export default AppRouter