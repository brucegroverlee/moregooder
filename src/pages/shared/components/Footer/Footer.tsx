import React from 'react';
import pkg from '../../../../../package.json';

export const Footer: React.FunctionComponent = () => {
  return(
    <footer className="footer footer-static footer-light">
      <p className="clearfix mb-0">
        <span className="float-left d-inline-block">2021 &copy; {pkg.name} v{pkg.version}</span>
        <span className="float-right d-sm-inline-block d-none">
          Crafted with
          <i className="bx bxs-heart pink mx-50 font-small-3"></i>
          by
          <a className="text-uppercase" href="https://1.envato.market/pixinvent_portfolio" target="_blank" rel="noreferrer">Pixinvent</a>
        </span>
        
        <button className="btn btn-primary btn-icon scroll-top" type="button">
          <i className="bx bx-up-arrow-alt"></i>
        </button>
      </p>
    </footer>
  );
}

export default Footer;