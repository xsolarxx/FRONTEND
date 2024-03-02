import { Navigate } from 'react-router-dom';

import { useAuth } from '../../context/authContext';

export const Protected = ({ children }) => {
  const { user, deleteUser } = useAuth();
  if (deleteUser) {
    return <Navigate to="/register" />;
  }
  if (user == null || user?.check == false) {
    return <Navigate to="/login" />;
  }

  return children;
};
