import './Footer.css';

import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="follow-content">
          <h4>Follow us</h4>
          <ul>
            <li><a href="/">Linkedin</a></li>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">Podcast</a></li>
          </ul>
        </div>
        <div className="column-center">
          <h4>Contact</h4>
          <strong>
            <p>Email:</p>
          </strong>
          <p>xsolarxcompany@gmail.com</p>
          <strong className="spacing">Address:</strong>
          <p>Plaza José Rinaldo,5 ,18882, Madrid</p>
        </div>
        <div className="column-center">
          <h4>Navigation</h4>
          <ul>
            {/* Arreglar los estilos de estos navlink, el color no se puede modificar del mismo modo que con la lista de follow us */}
            <li><NavLink className="links" to="/">Home</NavLink></li>
            <li><NavLink className="links" to="/news">News</NavLink></li>
            <li><NavLink className="links" to="/companies">Companies</NavLink></li>
            <li><NavLink className="links" to="/forum">Forum</NavLink></li>
          </ul>
        </div>
      </div>
      <p className="rights">2024 © All rights reserved</p>
    </footer>
  );
};
