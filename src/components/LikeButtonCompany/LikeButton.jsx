import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import { toggleLikedCompany } from '../../services/user.service';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LikeCompany = ({ id }) => {
  const { user, setUser } = useAuth();
  console.log('user', user);
  const [company, setCompany] = useState();
  const [like, setLike] = useState(user.likedCompany.find((item) => item._id == id));

  const handleLikeClick = async () => {
    if (user) {
      const likedCompany = await toggleLikedCompany(id);
      setCompany(likedCompany.data.company);
      setUser(() => likedCompany.data.user);

      const likedCompanyData = likedCompany.data.company;
      localStorage.setItem(`company_${id}`, JSON.stringify(likedCompanyData));
    }
  };

  useEffect(() => {
    const savedCompanyState = localStorage.getItem(`company_${id}`);
    if (savedCompanyState) {
      setLike(JSON.parse(savedCompanyState));
    }
  }, [id]);

  return (
    <div>
      {user && (
        <button onClick={handleLikeClick}>
          <FontAwesomeIcon icon={like ? solidHeart : regularHeart} />
        </button>
      )}
    </div>
  );
};
