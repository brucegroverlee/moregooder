import React from 'react';
import { LanguageDropdown } from './components/LanguageDropdown/LanguageDropdown.controller';
import { Account } from './components/Account/Account.controller';

interface IHeaderHtmlProps {}

export const HeaderHtml: React.FunctionComponent<IHeaderHtmlProps> = (props) => {
  return(
    <React.Fragment>
      <div className="header-navbar-shadow"></div>
      <nav className="header-navbar main-header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top ">
          <div className="navbar-wrapper">
              <div className="navbar-container content">
                  <div className="navbar-collapse" id="navbar-mobile">
                      <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                        <ul className="nav navbar-nav">
                          <li className="nav-item mobile-menu d-xl-none mr-auto">
                            <a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#">
                              <i className="ficon bx bx-menu"></i>
                            </a>
                          </li>
                        </ul>
                        <ul className="nav navbar-nav bookmark-icons">
                        </ul>
                        <ul className="nav navbar-nav">
                        </ul>
                      </div>
                      <ul className="nav navbar-nav float-right">
                        <LanguageDropdown/>
                        <Account/>
                      </ul>
                  </div>
              </div>
          </div>
      </nav>
    </React.Fragment>
  );
}