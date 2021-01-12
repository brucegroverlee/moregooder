import React from 'react';
import { LoginController } from './viewModel/Login.controller';
import { GoogleAuthServiceFactory } from './adapters/GoogleAuthService';
import { FacebookAuthServiceFactory } from './adapters/FacebookAuthService';
import { EmailAuthServiceFactory } from './adapters/EmailAuthService';

const LoginContainer: React.FunctionComponent = () => {
  return (
    <LoginController
      googleAuthService={GoogleAuthServiceFactory.getGoogleAuthService()}
      facebookAuthService={FacebookAuthServiceFactory.getFacebookAuthService()}
      emailAuthService={EmailAuthServiceFactory.getEmailAuthService()}
    />
  )
}

export default LoginContainer;