import React, { useState } from 'react';
import { useUser } from '../../../../../shared/contexts/user';
import { logout } from '../../../../useCases/logout';
import { AccountHtml } from './Account.html';

export const Account: React.FunctionComponent = () => {
  const { user, setUser } = useUser();
  const [ open, setOpen ] = useState(false);
  const toggle = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setOpen(!open);
  };
  const logoutHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    logout(localStorage, setUser)();
  };
  return(
    <AccountHtml
      open={open}
      toggle={toggle}
      user={user!}
      logout={logoutHandler}
    />
  );
}
