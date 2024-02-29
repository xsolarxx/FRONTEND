import './NavProfile.css';

import { Link } from 'react-router-dom';

import { useAuth } from '../../context/authContext';
import { useDeleteUser } from '../../hooks';

export const NavProfile = () => {
  const { setUser, setDeleteUser } = useAuth();
  return (
    <div className="containerNavProfile">
      <Link to="/profile/changePassword">
        <img
          className="icon"
          src="https://res.cloudinary.com/dq186ej4c/image/upload/v1686125399/pngwing.com_npd5sa.png"
          alt="go to ChangePassword"
        />
      </Link>

      <Link to="/profile/">
        <img
          className="icon"
          src="https://res.cloudinary.com/dq186ej4c/image/upload/v1686125391/Change_User_icon-icons.com_55946_lypx2c.png"
          alt="go to change data profile"
        />
      </Link>
      {/* <img
        className="icon"
        src="https://res.cloudinary.com/dq186ej4c/image/upload/v1686140226/eliminar_user_rmwoeg.png"
        alt="user delete button"
        onClick={() => useDeleteUser(setUser, setDeleteUser)}
      /> */}
      <button onClick={() => useDeleteUser(setUser, setDeleteUser)}>
        <span className="material-symbols-outlined">Delete User</span>
      </button>
    </div>
  );
};
