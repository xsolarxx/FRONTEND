import './NavProfile.css';

import { Link } from 'react-router-dom';

import { useAuth } from '../../context/authContext';
import { useDeleteUser } from '../../hooks';

export const NavProfile = () => {
  const { setUser, setDeleteUser, user } = useAuth();
  return (
    <>
      <div className="container">
        <div
          className="delete-user"
          onClick={() => useDeleteUser(setUser, setDeleteUser)}
          style={{ cursor: 'pointer' }}
        >
          <span className="material-symbols-outlined">delete</span> Delete user
        </div>

        <Link to="/profile/changePassword">
          <span className="material-symbols-outlined">lock</span> Change password
        </Link>
      </div>
    </>
  );
};
