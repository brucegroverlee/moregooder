import React, { useState } from 'react';
import { SideMenuDropDownHtml } from './SideMenuDropDown.html';

export interface ISideMenuDropDownProps {
  language: string;
  defaultText: string;
  texts: {
    [key: string]: string;
  };
  link: string;
  items: {
    defaultText: string;
    texts: {
      [key: string]: string;
    };
    link: string;
  }[];
}

export const SideMenuDropDown: React.FunctionComponent <ISideMenuDropDownProps> = (props) => {
  const currentPathname = window.location.pathname;
  const isActive = (currentPathname.indexOf(props.link)===0) ? ('sidebar-group-active') : ('');
  const title = (typeof props.texts[props.language] === 'string') ? (props.texts[props.language]) : (props.defaultText);
  const [isOpen, setIsOpen] = useState<string>('');
  return(
    <SideMenuDropDownHtml
      language={props.language}
      currentPathname={currentPathname}
      isActive={isActive}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={title}
      link={props.link}
      items={props.items}
    />
  );
}