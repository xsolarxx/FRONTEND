import { Navigate } from 'react-router-dom';

import { useAuth } from '../../context/authContext';

export const ProtectedCheckChildren = ({ children }) => {
  const { allUser, user } = useAuth();
  if (allUser?.data?.user?.check == true || user?.check == true) {
    return <Navigate to="/dashboard" />;
  }
  if (user == null && allUser.data.confirmationCode === '') {
    return <Navigate to="/login" />;
  }
  return children;
};
