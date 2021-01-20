import React from 'react';
import { LoginController } from './viewModel/Login.controller';
import { GoogleAuthServiceFactory } from './adapters/GoogleAuthService';
import { FacebookAuthServiceFactory } from './adapters/FacebookAuthService';
import { EmailAuthServiceFactory } from './adapters/EmailAuthService';
import { UserServiceFactory } from '../shared/adapters/UserService';

const LoginContainer: React.FunctionComponent = () => {
  return (
    <LoginController
      googleAuthService={GoogleAuthServiceFactory.getGoogleAuthService()}
      facebookAuthService={FacebookAuthServiceFactory.getFacebookAuthService()}
      emailAuthService={EmailAuthServiceFactory.getEmailAuthService()}
      userService={UserServiceFactory.getUserService()}
    />
  )
}

export default LoginContainer;