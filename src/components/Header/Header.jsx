import './Header.css';

import { NavLink } from 'react-router-dom';

import { useAuth } from '../../context/authContext';

export const Header = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <header>
        <nav>
          <NavLink className="link-home" to="/">
            <p>Home</p>
          </NavLink>
          <NavLink className="link-news" to="/news">
            <p>News</p>
          </NavLink>

          {user == null && (
            <NavLink to="/login">
              <button className="button--green button--medium">Login</button>
            </NavLink>
          )}

          {user !== null ? (
            <NavLink to="/dashboard">
              <p>Dashboard</p>
            </NavLink>
          ) : null}
          {user !== null ? (
            <NavLink to="/forum">
              <p>Forum</p>
            </NavLink>
          ) : null}
          {user !== null ? (
            <NavLink to="/company">
              <p>Company</p>
            </NavLink>
          ) : null}
          {user !== null && (
            <button className="icon" onClick={() => logout()}>
              Logout
            </button>
          )}
          {user !== null ? (
            <NavLink className="link-log" to="/profile">
              <img className="icon" src={user.image} alt={user.user} />
            </NavLink>
          ) : null}
        </nav>
      </header>
    </>
  );
};
