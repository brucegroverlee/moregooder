import React from 'react';
import { Link } from 'react-router-dom';

interface ISideMenuItem {
  language: string;
  defaultText: string;
  texts: {
    [key: string]: string;
  };
  link: string;
}

export const SideMenuItem: React.FunctionComponent<ISideMenuItem> = (props) => {
  const currentPathname = window.location.pathname;
  const isActive = (currentPathname.indexOf(props.link)===0) ? ('active') : ('');
  const title = (typeof props.texts[props.language] === 'string') ? (props.texts[props.language]) : (props.defaultText);
  return(
    <li className={`${isActive} nav-item`}>
      <Link to={props.link}>
        <i className="menu-livicon" data-icon="envelope-pull"></i>
        <span className="menu-title" >{title}</span>
      </Link>
    </li>
  );
}