import './Dashboard.css';

import { useEffect, useState } from 'react';
import { getByIdPopulate } from '../../services/user.service';
import { useAuth } from '../../context/authContext';

import { useParams } from 'react-router-dom';
import { LikedList } from '../../components';

export const Dashboard = () => {
  const [userDashboard, setuserDashboard] = useState(null);
  const { user, setUser } = useAuth();
  const { id } = useParams();

  const fecthlikedCompanies = async () => {
    setUser(await getByIdPopulate(user._id));
  };

  useEffect(() => {
    fecthlikedCompanies();
  }, []);

  return (
    <div>
      {user &&
        user.map((type) => (
          <div key={type._id}>
            <LikedList />
          </div>
        ))}
    </div>
  );
};
