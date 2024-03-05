import './NavProfile.css';

import { Link } from 'react-router-dom';

import { useAuth } from '../../context/authContext';
import { useDeleteUser } from '../../hooks';

export const NavProfile = () => {
  const { setUser, setDeleteUser, user } = useAuth();
  return (
    <>
      <div>
        <span className="material-symbols-outlined">delete</span> delete user <br></br>
        <span className="material-symbols-outlined">lock</span> change password
      </div>
      {/* <Link to="/profile/changePassword" className="material-symbols-outlined">
        <span className="material-symbols-outlined">lock</span> <p>Change password</p>
      </Link> */}
      {/* <div onClick={() => useDeleteUser(setUser, setDeleteUser)}>
        <Link to=""></Link>
      </div> */}
      {/* <button
        className="material-symbols-outlined button--green"
        // className="button--green"
        onClick={() => useDeleteUser(setUser, setDeleteUser, user)}
      >
        <span className=" "> Delete User</span>
      </button> */}
      {/* <Link to="/profile/">
        <img
          className="icon"
          src="https://res.cloudinary.com/dq186ej4c/image/upload/v1686125391/Change_User_icon-icons.com_55946_lypx2c.png"
          alt="go to change data profile"
        />
      </Link> */}
    </>
  );
};
