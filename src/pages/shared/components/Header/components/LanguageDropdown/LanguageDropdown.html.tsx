import React from 'react';
import { ILanguage } from './LanguageDropdown.controller';

interface ILanguageDropdownHtmlProps {
  open: boolean;
  toggle(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void;
  currentLanguage: ILanguage;
  setLanguageHandle(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, value: string): void;
}

export const LanguageDropdownHtml: React.FunctionComponent<ILanguageDropdownHtmlProps> = (props) => {
  return(
    <li className={`dropdown dropdown-language nav-item ${(props.open)? ('show') : ('')}`}>
      <a 
        className="dropdown-toggle nav-link" 
        id="dropdown-flag" 
        href="#" 
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false"
        onClick={props.toggle}
      >
        <i className={`flag-icon flag-icon-${props.currentLanguage.country}`}></i>
        <span className="selected-language">{props.currentLanguage.text}</span>
      </a>
      <div className={`dropdown-menu ${(props.open)? ('show') : ('')}`} aria-labelledby="dropdown-flag">
        <a
          className="dropdown-item"
          href="#"
          data-language="en"
          onClick={(event) => props.setLanguageHandle(event, 'en')}
        >
          <i className="flag-icon flag-icon-us mr-50"></i> 
          English
        </a>
        <a
          className="dropdown-item"
          href="#"
          data-language="es"
          onClick={(event) => props.setLanguageHandle(event, 'es')}
        >
          <i className="flag-icon flag-icon-es mr-50"></i> 
          Español
        </a>
      </div>
    </li>
  );
}