import './Header.css';

import { NavLink } from 'react-router-dom';

import { useAuth } from '../../context/authContext';

export const Header = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/news">News</NavLink>

          {user == null && (
            <NavLink to="/login">
              <span className="material-symbols-outlined">logout</span>
            </NavLink>
          )}

          {user !== null ? <NavLink to="/dashboard">Dashboard</NavLink> : null}
          {user !== null ? <NavLink to="/company">Company</NavLink> : null}
          {user !== null && (
            <button className="icon" onClick={() => logout()}>
              <span className="material-symbols-outlined">logout</span>
            </button>
          )}
          {user !== null ? (
            <NavLink to="/profile">
              <img className="icon" src={user.image} alt={user.user} />
            </NavLink>
          ) : null}
        </nav>
      </header>
    </>
  );
};
