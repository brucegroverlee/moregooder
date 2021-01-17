import React from 'react';
import { SideMenuHtml } from './SideMenu.html';
import { useLanguage } from '../../contexts/language';

export const SideMenuController: React.FunctionComponent = () => {
  const { language } = useLanguage();
  return(
    <SideMenuHtml
      language={language}
    />
  );
}

export default SideMenuController;