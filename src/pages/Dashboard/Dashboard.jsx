import './Dashboard.css';

import { useEffect, useState } from 'react';
import { getByIdCompany } from '../../services/company.service';
import { useAuth } from '../../context/authContext';

import { useParams } from 'react-router-dom';
import { LikedList } from '../../components';

export const Dashboard = () => {
  const [likedCompanies, setLikedCompanies] = useState(null);
  const { user, setUser } = useAuth();

  useEffect(() => {
    const likedCompaniesData = user.likedCompany.map(async (companyId) => {
      console.log('🚀 ~ likedCompaniesData ~ companyId:', companyId);
      const companyData = await getByIdCompany(companyId);
      return companyData;
    });

    setLikedCompanies(likedCompaniesData);
  }, [user]);

  return (
    <div>
      {likedCompanies &&
        likedCompanies.map((companyData, index) => (
          <LikedList type={companyData} key={index} />
        ))}
    </div>
  );
};
