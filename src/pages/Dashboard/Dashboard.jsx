import './Dashboard.css';

import { useEffect, useState } from 'react';

import { useAuth } from '../../context/authContext';

import { useParams } from 'react-router-dom';
import { LikedList } from '../../components';

export const Dashboard = () => {
  const [likedCompanies, setLikedCompanies] = useState(null);
  const { user, setUser } = useAuth();
  console.log('🚀 ~ Dashboard ~ user:', user);

  useEffect(() => {
    setLikedCompanies(user.likedCompany || []);
  }, [user]);

  return (
    <div>
      {likedCompanies &&
        likedCompanies.data.map((companyId, index) => (
          <LikedList companyId={companyId} key={index} />
        ))}
    </div>
  );
};
