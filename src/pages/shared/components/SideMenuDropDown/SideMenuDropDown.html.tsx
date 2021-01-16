import React from 'react';
import { Item } from './components/Item';

interface ISideMenuDropDownHtmlProps {
  language: string;
  currentPathname: string;
  isActive: string;
  isOpen: string;
  setIsOpen(value: string): void;
  title: string;
  link: string;
  items: {
    defaultText: string;
    texts: {
      [key: string]: string;
    };
    link: string;
  }[];
}

export const SideMenuDropDownHtml: React.FunctionComponent<ISideMenuDropDownHtmlProps> = (props) => {
  const itemsList = props.items.map((item, index) => (
    <Item
      key={`${index}-${item.defaultText}`}
      language={props.language}
      currentPathname={props.language}
      defaultText={item.defaultText}
      texts={item.texts}
      link={item.link}
    />
  ));

  return(
    <li className={`nav-item has-sub ${props.isActive} ${props.isOpen}`}>
      <a 
        onClick={() => props.setIsOpen((props.isOpen==='open') ? ('') : ('open'))}
        style={{ cursor: 'pointer', }}
      >

        <i className="menu-livicon livicon-evo-holder" data-icon="desktop" style={{"visibility": "visible", width: "60px"}}>
          <div className="lievo-svg-wrapper">
          </div>
        </i>

        <span className="menu-title">{props.title}</span>
      </a>
      <ul className="menu-content">
        {itemsList}
      </ul>
    </li>
  );
}