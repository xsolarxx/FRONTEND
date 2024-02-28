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
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/company">Company</NavLink>
          <NavLink to="/news">News</NavLink>

          {user == null && (
            <NavLink to="/login">
              <span className="material-symbols-outlined">logout</span>
            </NavLink>
          )}

          {user !== null ? <NavLink to="/dashboard">Dashboard</NavLink> : null}
          {user !== null ? <NavLink to="/company">Dashboard</NavLink> : null}
          {user !== null ? <NavLink to="/news">Dashboard</NavLink> : null}
          {user !== null && (
            <button className="icon" onClick={() => logout()}>
              <img
                src="https://media.discordapp.net/attachments/1201292840450404382/1212156762640359514/image.png?ex=65f0cff4&is=65de5af4&hm=20c39b23b257bb87f871a83ffa6ba452fab47eaadef9de037eebbd052f69e354&=&format=webp&quality=lossless&width=417&height=417"
                alt="Foto"
              />
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
