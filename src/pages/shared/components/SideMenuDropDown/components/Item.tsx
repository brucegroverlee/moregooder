import React from 'react';
import { Link } from 'react-router-dom';

export interface IItem {
  language: string;
  defaultText: string;
  texts: {
    [key: string]: string;
  };
  currentPathname: string;
  link: string;
}

export const Item: React.FunctionComponent<IItem> = (props) => {
  const isActive = (props.currentPathname.indexOf(props.link)===0) ? ('active') : ('');
  const title = (typeof props.texts[props.language] === 'string') ? (props.texts[props.language]) : (props.defaultText);
  return(
    <li className={`${isActive} is-shown`}>
      <Link to={props.link}>
        <i className="bx bx-right-arrow-alt"></i>
        <span className="menu-item">{title}</span>
      </Link>
    </li>
  );
}