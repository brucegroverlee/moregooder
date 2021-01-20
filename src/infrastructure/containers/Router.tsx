import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { history } from '../../pages/shared/containers/history';

import { useUser } from '../../pages/shared/contexts/user';
import { initSession } from '../../pages/shared/useCases/initSession';
import { UserService } from '../../pages/shared/adapters/UserService';

import { Spinner } from '../../pages/shared/components/Spinner/Spinner';

const Signup = lazy(() => import('../../pages/Signup/index') );
const Login = lazy(() => import('../../pages/Login/index') );

const Layout = lazy(() => import('../../pages/shared/components/layout') );
const Home = lazy(() => import('../../pages/Home') );
const Texting = lazy(() => import('../../pages/Texting') );
const Contacts = lazy(() => import('../../pages/Contacts') );
const ContactsCreate = lazy(() => import('../../pages/ContactsCreate') );
const Forms = lazy(() => import('../../pages/Forms') );
const FormsCreate = lazy(() => import('../../pages/FormsCreate') );

const AppRouter: React.FunctionComponent = () => {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if ((localStorage.getItem('token')!==null || sessionStorage.getItem('token')!==null) && user===null) {
      setLoading(true);
      const userService = new UserService();
      (async () => {
        await initSession(localStorage, userService, setUser)();
        console.log('Authenticated');
        setLoading(false);
        if (
          window.location.pathname==='/login' || 
          window.location.pathname==='/signup') {
          history.push('/');
        }
      })();
    }
  }, []);

  if (loading) {
    return(
      <Spinner />
    );
  } else {
    return (
      <Router history={history}>
        {(user) ? (
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Layout>
                <Route
                  exact
                  path="/texting"
                  component={Texting}
                />
                <Route
                  exact
                  path="/contacts"
                  component={Contacts}
                />
                <Route
                  exact
                  path="/contacts/create"
                  component={ContactsCreate}
                />
                <Route
                  exact
                  path="/forms"
                  component={Forms}
                />
                <Route
                  exact
                  path="/forms/create"
                  component={FormsCreate}
                />
                <Route
                  exact
                  path="/"
                  component={Home}
                />
              </Layout>
            </Switch>
          </Suspense> 
        ) : (
          <Suspense fallback={<Spinner />}>
            <Switch>
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
              { !((localStorage.getItem('token')!==null || sessionStorage.getItem('token')!==null)) && (
                <Redirect 
                  to="/login"
                />
              ) }
            </Switch> 
          </Suspense>
        )}    
      </Router>
    );
  }
}

export default AppRouter