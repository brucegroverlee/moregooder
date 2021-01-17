import React from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css';
import { SideMenuItem } from '../SideMenuItem/SideMenuItem';
import { SideMenuDropDown } from '../SideMenuDropDown/SideMenuDropDown.controller';

interface SideMenuHtmlProps {
  language: string;
}

export const SideMenuHtml: React.FunctionComponent<SideMenuHtmlProps> = (props) => {
  return(
    <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
      <div className="navbar-header">
        <ul className="nav navbar-nav flex-row">
          <li className="nav-item mr-auto">
            <Link className="navbar-brand" to={'/'}>
              <h2 className="brand-text mb-0">Moregooder</h2>
            </Link>
          </li>
        </ul>
      </div>

      <div className="shadow-bottom"></div>

      <div className="main-menu-content">
        <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation" data-icon-style="lines">

          <SideMenuItem
            language={props.language}
            defaultText={'Home'}
            texts={{
              en: 'Home',
              es: 'Inicio',
            }}
            link={'/'}
          />

          <li className=" navigation-header">
            <span>Apps</span>
          </li>

          <SideMenuItem
            language={props.language}
            defaultText={'Texting'}
            texts={{
              en: 'Texting',
              es: 'Mensajería',
            }}
            link={'/texting'}
          />

          <SideMenuDropDown
            language={props.language}
            defaultText={'Contacts'}
            texts={{
              en: 'Contacts',
              es: 'Contactos'
            }}
            link={'/contacts'}
            items={[
              { 
                defaultText: 'Search contact',
                texts: { 
                  en: 'Search contact',
                  es: 'Buscar contacto',
                },
                link: '/contacts',
              },
              { 
                defaultText: 'Create a contact',
                texts: { 
                  en: 'Create a contact',
                  es: 'Crear contacto',
                },
                link: '/contacts/create',
              },
            ]} 
          />

          <SideMenuDropDown
            language={props.language}
            defaultText={'Forms'}
            texts={{
              en: 'Forms',
              es: 'Formularios'
            }}
            link={'/forms'}
            items={[
              { 
                defaultText: 'Forms List',
                texts: { 
                  en: 'Forms List',
                  es: 'Formularios',
                },
                link: '/forms',
              },
              { 
                defaultText: 'Create a form',
                texts: { 
                  en: 'Create a form',
                  es: 'Crear formulario',
                },
                link: '/forms/create',
              },
            ]} 
          />
        </ul>
      </div>
    </div>
  );
}