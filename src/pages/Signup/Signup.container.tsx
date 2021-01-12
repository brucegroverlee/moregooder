import React from 'react';
import { SignupHtml } from './Signup.html';

function setBody() {
  window.document.body.className = 'vertical-layout vertical-menu-modern 1-column  navbar-sticky footer-static bg-full-screen-image  blank-page blank-page';
  window.document.body.dataset.open = 'click';
  window.document.body.dataset.menu = 'vertical-menu-modern';
  window.document.body.dataset.col = '1-column';
}

export interface ISignupContainerProps {}

export const SignupContainer: React.FunctionComponent<ISignupContainerProps> = (props) => {
  setBody();
  return (
    <SignupHtml/>
  )
}