import './Header.css';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../../context/authContext';

export const Header = () => {
  const { user, logout } = useAuth();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleClickMenu = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <header>
        <i className="fa fa-bars" onClick={handleClickMenu}></i>
        <nav className={`nav ${isMobileNavOpen ? 'nav-mobile' : 'nav-large'}`}>
          <NavLink className="link-home" to="/" onClick={() => setIsMobileNavOpen(false)}>
            <div className="logo"></div>
          </NavLink>

          {user !== null ? (
            <NavLink to="/dashboard" onClick={() => setIsMobileNavOpen(false)}>
              <p>Dashboard</p>
            </NavLink>
          ) : null}
          <NavLink className="link-news" to="/news" onClick={() => setIsMobileNavOpen(false)}>
            <p>News</p>
          </NavLink>
          <NavLink to="/forumPage" onClick={() => setIsMobileNavOpen(false)}>
            <p>Forum</p>
          </NavLink>
          {/* <NavLink to="/about">
            <p>About</p>
          </NavLink> */}
          {user == null && (
            <NavLink to="/login" onClick={() => setIsMobileNavOpen(false)}>
              <button className="button--green">Login</button>
            </NavLink>
          )}
          {user !== null ? (
            <NavLink to="/company" onClick={() => setIsMobileNavOpen(false)}>
              <p>Companies</p>
            </NavLink>
          ) : null}
          {user !== null && (
            <NavLink to="/" onClick={() => setIsMobileNavOpen(false)}>
              <button className="button--blue button-medium" onClick={() => logout()}>
                Logout
              </button>
            </NavLink>
          )}
          {user !== null ? (
            <NavLink to="/profile" onClick={() => setIsMobileNavOpen(false)}>
              <img className="icon" src={user.image} alt={user.user} />
            </NavLink>
          ) : null}
        </nav>
      </header>
    </>
  );
};
