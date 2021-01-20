import React from 'react';

import { Footer } from '../Footer/Footer';
import { HeaderController as Header } from '../Header/Header.controller';
import { SideMenuController as SideMenu } from '../SideMenu/SideMenu.controller';


function setBody() {
  window.document.body.className = 'vertical-layout vertical-menu-modern 2-columns  navbar-sticky footer-static menu-expanded';
  window.document.body.dataset.open = 'click';
  window.document.body.dataset.menu = 'vertical-menu-modern';
  window.document.body.dataset.col = '2-columns';
}

const Layout: React.FunctionComponent = (props) => {
  setBody();
  return(
    <React.Fragment>
      <Header/>
      <SideMenu/>
      {props.children}
      <div className="sidenav-overlay"></div>
      <div className="drag-target"></div>
      <Footer/>
    </React.Fragment>
  );
}

export default Layout;