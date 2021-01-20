import React from 'react';
import { IAuthService } from '../useCases/ports/IAuthService';
import { IUserService } from '../../shared/useCases/ports/IUserService';
import { loginWithSocial } from '../useCases/loginWithSocial';
import { loginWithEmail } from '../useCases/loginWithEmail';
import { LoginPresenter } from '../adapters/LoginPresenter';
import { history } from '../../shared/containers/history';
import { useUser } from '../../shared/contexts/user';
import useLoginHook from './login.hook';
import { LoginHtml } from './Login.html';

function setBody() {
  window.document.body.className = 'vertical-layout vertical-menu-modern 1-column  navbar-sticky footer-static bg-full-screen-image  blank-page blank-page';
  window.document.body.dataset.open = 'click';
  window.document.body.dataset.menu = 'vertical-menu-modern';
  window.document.body.dataset.col = '1-column';
}

export interface ILoginControllerProps {
  googleAuthService: IAuthService;
  facebookAuthService: IAuthService;
  emailAuthService: IAuthService;
  userService: IUserService;
}

export const LoginController: React.FunctionComponent<ILoginControllerProps> = (props) => {
  setBody();
  const {
    loading,
    setLoading,
    emailField,
    setEmailField,
    passwordField,
    setPasswordField,
    errorMessage,
    setErrorMessage,
  } = useLoginHook();
  const { setUser } = useUser();
  const presenter = new LoginPresenter(setLoading, setErrorMessage, localStorage, setUser, history);
  const loginWithGoogleHandle = loginWithSocial(props.googleAuthService, props.userService, presenter);
  const loginWithFacebookHandle = loginWithSocial(props.facebookAuthService, props.userService, presenter);
  const loginWithEmailHandle = loginWithEmail(props.emailAuthService, props.userService, presenter);
  return (
    <LoginHtml
      loading={loading}
      errorMessage={errorMessage}
      emailField={emailField}
      setEmailField={setEmailField}
      passwordField={passwordField}
      setPasswordField={setPasswordField}
      loginWithGoogleHandle={loginWithGoogleHandle}
      loginWithFacebookHandle={loginWithFacebookHandle}
      loginWithEmailHandle={loginWithEmailHandle}
    />
  )
}