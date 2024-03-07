import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import { useAuth } from '../../context/authContext';
import { toggleLikedCompany } from '../../services/user.service';

export const LikeCompany = ({ id }) => {
  const { user, setUser } = useAuth();
  console.log('entro', user);
  const [like, setLike] = useState(!!user.likedCompany?.find((item) => item === id));

  const handleLikeClick = async () => {
    console.log('entro', like);
    if (user) {
      const { token } = user;
      const likedCompany = await toggleLikedCompany(id);
      const userUpdate = { ...likedCompany.data.user, token };
      setUser(() => userUpdate);
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(userUpdate));
      setLike(!!likedCompany.data.user.likedCompany.find((item) => item === id));
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
