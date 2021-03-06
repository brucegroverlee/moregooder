import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/bootstrap.css';
import './styles/bootstrap-extended.css';
import './styles/colors.css';
import './styles/components.css';
import './styles/vertical-menu.css';
import './styles/boxicons/css/boxicons.css';
import './styles/flag-icon-css/css/flag-icon.css';
// import 'boxicons/css/boxicons.css';
import Router from './infrastructure/containers/Router';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './pages/shared/contexts/user';
import { LanguageProvider } from './pages/shared/contexts/language';
import pkg from '../package.json';

console.log(`${process.env.REACT_APP_APP_ENV} v${pkg.version}`);

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <LanguageProvider>
        <Router />
      </LanguageProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
