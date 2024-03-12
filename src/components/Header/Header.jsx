import './Header.css';

import { useState, useEffect } from 'react'; // Importamos useEffect
import { NavLink, useLocation } from 'react-router-dom'; // Importamos useLocation

import { useAuth } from '../../context/authContext';
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle';

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
        <div className="auxfa">
        <i className="fa fa-bars" onClick={handleClickMenu}>
        </i>
        <div className="logo-mobile1"></div>
        </div>
        <nav className={`nav ${isMobileNavOpen ? 'nav-mobile' : 'nav-large'}`}>
          {!isMobileNavOpen && ( // Renderiza el logo solo en la versión nav-large
            <NavLink className="link-home" to="/" onClick={handleNavLinkClick}>
              <div className="logo"></div>
            </NavLink>
          )}
          {isMobileNavOpen ? ( // Si es versión nav-mobile, muestra "Home" en lugar del logo
            <NavLink className="link-home-mobile" to="/" onClick={handleNavLinkClick}>
              <p>Home</p>
            </NavLink>
          ) : ( // En caso contrario, muestra el enlace "Home"
            <NavLink className="link-home" to="/" onClick={handleNavLinkClick}>
              <p>Home</p>
            </NavLink>
          )}
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
          <DarkModeToggle />
        </nav>
      </header>
    </>
  );
};
