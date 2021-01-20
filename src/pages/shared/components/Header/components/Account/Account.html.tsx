import React from 'react';
import Avatar from 'react-avatar';

interface IAccountHtmlProps {
  open: boolean;
  toggle(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void;
  user: IUser;
  logout(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void;
}

export const AccountHtml: React.FunctionComponent<IAccountHtmlProps> = (props) => {
  return(
    <li className={`dropdown dropdown-user nav-item ${(props.open)? ('show') : ('')}`}>
      <a
        className="dropdown-toggle nav-link dropdown-user-link"
        href="#"
        data-toggle="dropdown"
        onClick={props.toggle}
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name">{props.user.name}</span>
          <span className="user-status text-muted">Available</span>
        </div>
        <span>
        <Avatar 
          name={props.user.name}
          size={"40px"}
          round
        />
        </span>
      </a>
      <div className={`dropdown-menu dropdown-menu-right pb-0 ${(props.open)? ('show') : ('')}`}>
        <a 
          className="dropdown-item"
          href="#"
          onClick={props.logout}
        >
          <i className="bx bx-power-off mr-50"></i> 
          Logout
        </a>
      </div>
    </li>
  );
}