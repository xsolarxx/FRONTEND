import './Footer.css';

import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <div className="footer-outer-conatiner">
        <footer className="footer-container">
          <div className="column2">
            <h5>Contact</h5>
            <p>
              <strong>Email:</strong> xsolarxcompany@gmail.com
            </p>
            <p>
              <strong>Address:</strong> Plaza José Rinaldo 5,18882, Madrid
            </p>
            <div className="logo-white"></div>
          </div>

          <div className="column1">
            <h5>Follow us</h5>
            <a href="/">Linkedin</a>
            <a href="/">Twitter</a>
            <a href="/">Instagram</a>
            <a href="/">Podcast</a>
          </div>

          <div className="column3">
            <h5>Navigation</h5>

            <NavLink className="links" to="/">
              Home
            </NavLink>

            <NavLink className="links" to="/news">
              News
            </NavLink>

            <NavLink className="links" to="/companies">
              Companies
            </NavLink>

            <NavLink className="links" to="/forum">
              forum
            </NavLink>
          </div>
        </footer>

        {/* <p className="rights">solar.co.uk 2024 © All rights reserved</p> */}
      </div>
    </>
  );
};
