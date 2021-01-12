import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/bootstrap.css';
import './styles/bootstrap-extended.css';
import './styles/colors.css';
import './styles/components.css';
import './styles/vertical-menu.css';
import './styles/flag-icon-css/css/flag-icon.css';
import 'boxicons/css/boxicons.css';
import Router from './infrastructure/containers/Router';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './pages/shared/contexts/user';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Router />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
