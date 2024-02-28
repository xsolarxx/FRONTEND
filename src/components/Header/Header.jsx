import './Header.css';

import { NavLink } from 'react-router-dom';

import { useAuth } from '../../context/authContext';

export const Header = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <header className="max-width-container">
        <div className="titleFatherContainer">
          <img
            src="https://media.discordapp.net/attachments/1201292840450404382/1212154696673005638/image.png?ex=65f0ce08&is=65de5908&hm=5fda8a6bb1decf8f1933607fd8f7ebe5da2f8f35b3e3ac10031a3e80decb9325&=&format=webp&quality=lossless&width=417&height=417"
            alt="logo"
            className="logo"
          />
          <div className="titleContainer">
            <h4 className="titleHeaderBlack">USER PAGE</h4>
          </div>
        </div>
        <nav>
          {user == null && (
            <NavLink to="/login">
              <img
                src="https://media.discordapp.net/attachments/1201292840450404382/1212155952997072986/image.png?ex=65f0cf33&is=65de5a33&hm=a11064b401fbc0896e7abed448dbe3572e55d115575181c75ab54218caafe0bd&=&format=webp&quality=lossless&width=417&height=417"
                alt=""
                className="iconNav"
              />
            </NavLink>
          )}

          {user !== null ? (
            <NavLink to="/dashboard">
              <img
                src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685705689/dashboard-statistics-5492_rnmxcl.png"
                alt=""
                className="iconNav iconDashBoard"
              />
            </NavLink>
          ) : null}

          <NavLink to="/">
            <img
              src="https://media.discordapp.net/attachments/1201292840450404382/1212154939879592116/image.png?ex=65f0ce42&is=65de5942&hm=dce3dbcf25894eddf48154df82aea23bb44b80cdc4227b09d63608a0697c25ad&=&format=webp&quality=lossless&width=417&height=417"
              alt=""
              className="iconNav home"
            />
          </NavLink>
          {user !== null && (
            <button className="iconNav iconLogout" onClick={() => logout()}>
              <img
                src="https://media.discordapp.net/attachments/1201292840450404382/1212156762640359514/image.png?ex=65f0cff4&is=65de5af4&hm=20c39b23b257bb87f871a83ffa6ba452fab47eaadef9de037eebbd052f69e354&=&format=webp&quality=lossless&width=417&height=417"
                alt="Foto"
              />
            </button>
          )}
          {user !== null ? (
            <>
              <NavLink to="/profile">
                <img className="profileCircle" src={user.image} alt={user.user} />
              </NavLink>
            </>
          ) : null}
          {}
        </nav>
      </header>
      <div className="whiteContainer"></div>
    </>
  );
};
