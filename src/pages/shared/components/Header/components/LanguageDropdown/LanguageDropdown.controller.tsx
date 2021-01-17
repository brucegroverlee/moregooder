import React, { useState } from 'react';
import { useLanguage } from '../../../../contexts/language';
import { LanguageDropdownHtml } from './LanguageDropdown.html';

export interface ILanguage {
  country: string;
  language: string;
  text: string;
}

export const languages: ILanguage[] = [
  { country: 'us', language: 'en', text: 'English', },
  { country: 'es', language: 'es', text: 'Español', },
];

export const LanguageDropdown: React.FunctionComponent = () => {
  const { language, setLanguage } = useLanguage();
  const [ open, setOpen ] = useState(false);
  const toggle = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setOpen(!open);
  };
  const setLanguageHandle = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, value: string) => {
    event.preventDefault();
    setLanguage(value);
    setOpen(false);
  };
  const currentLanguage = languages.find(_language => _language.language === language);
  return(
    <LanguageDropdownHtml
      open={open}
      toggle={toggle}
      currentLanguage={currentLanguage!}
      setLanguageHandle={setLanguageHandle}
    />
  );
}