import './Header.css';

import { useState, useEffect } from 'react'; // Importamos useEffect
import { NavLink, useLocation } from 'react-router-dom'; // Importamos useLocation

import { useAuth } from '../../context/authContext';

export const Header = () => {
  const { user, logout } = useAuth();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation(); // Obtenemos la ubicación actual

  useEffect(() => {
    // Cerrar el menú móvil cuando cambie la ubicación (navegación entre páginas)
    setIsMobileNavOpen(false);
  }, [location.pathname]); // Volvemos a ejecutar el efecto cuando cambie la ubicación

  const handleClickMenu = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleNavLinkClick = () => {
    setIsMobileNavOpen(false); // Cerrar el menú móvil al hacer clic en un enlace de navegación
  };

  return (
    <>
      <header>
        <i className="fa fa-bars" onClick={handleClickMenu}></i>
        <nav className={`nav ${isMobileNavOpen ? 'nav-mobile' : 'nav-large'}`}>
          <NavLink className="link-home" to="/" onClick={handleNavLinkClick}>
            <div className="logo"></div>
          </NavLink>

          <NavLink className="link-news" to="/news" onClick={handleNavLinkClick}>
            <p>News</p>
          </NavLink>
          <NavLink to="/forumPage" onClick={handleNavLinkClick}>
            <p>Forum</p>
          </NavLink>
          {user == null && (
            <NavLink to="/login" onClick={handleNavLinkClick}>
              <button className="button--green">Login</button>
            </NavLink>
          )}
          {user !== null ? (
            <NavLink to="/company" onClick={handleNavLinkClick}>
              <p>Companies</p>
            </NavLink>
          ) : null}
          {user !== null && (
            <NavLink
              to="/"
              onClick={() => {
                setIsMobileNavOpen(false);
                logout();
              }}
            >
              <button className="button--blue button-medium">Logout</button>
            </NavLink>
          )}
          {user !== null ? (
            <NavLink to="/dashboard" onClick={handleNavLinkClick}>
              <img className="icon" src={user.image} alt={user.user} />
            </NavLink>
          ) : null}
        </nav>
      </header>
    </>
  );
};
