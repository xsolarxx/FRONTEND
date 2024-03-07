import './Header.css';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../../context/authContext';

export const Header = () => {
  const { user, logout } = useAuth();
  const [showMenuMob, setShowMenuMob] = useState(false);

  const handleClickMenu = () => {
    setShowMenuMob(!showMenuMob);
  };

  return (
    <>
      <header>
        <i className="fa fa-bars" onClick={handleClickMenu}></i>
        <nav className={`nav ${showMenuMob ? 'nav-mobile' : 'nav-large'}`}>
          <div className="logo"></div>
          <NavLink className="link-home" to="/">
            <p>Home</p>
          </NavLink>
          {user !== null ? (
            <NavLink to="/dashboard">
              <p>Dashboard</p>
            </NavLink>
          ) : null}
          <NavLink className="link-news" to="/news">
            <p>News</p>
          </NavLink>
          <NavLink to="/forumPage">
            <p>Forum</p>
          </NavLink>
          <NavLink to="/about">
            <p>About</p>
          </NavLink>
          {user == null && (
            <NavLink to="/login">
              <button className="button--green">Login</button>
            </NavLink>
          )}
          {user !== null ? (
            <NavLink to="/company">
              <p>Company</p>
            </NavLink>
          ) : null}
          {user !== null && (
            <NavLink to="/">
              <button className="button--blue button-medium" onClick={() => logout()}>
                Logout
              </button>
            </NavLink>
          )}
          {user !== null ? (
            <NavLink>
              <img className="icon" src={user.image} alt={user.user} />
            </NavLink>
          ) : null}
        </nav>
      </header>
    </>
  );
};
