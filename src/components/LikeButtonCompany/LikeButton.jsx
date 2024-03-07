import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import { useAuth } from '../../context/authContext';
import { toggleLikedCompany } from '../../services/user.service';

export const LikeCompany = ({ id }) => {
  const { user, setUser } = useAuth();

  const [like, setLike] = useState(!!user.likedCompany?.find((item) => item === id));

  const handleLikeClick = async () => {
    console.log('like', like);
    if (user) {
      const { token } = user;
      let updatedLikedCompany;
      if (like) {
        updatedLikedCompany = await toggleLikedCompany(id, false); // Remove company from liked companies
      } else {
        updatedLikedCompany = await toggleLikedCompany(id, true); // Add company to liked companies
      }
      const userUpdate = { ...updatedLikedCompany.data.user, token };
      setUser(() => userUpdate);
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(userUpdate));
      setLike(!like); // Toggle like state
    }
  };

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
