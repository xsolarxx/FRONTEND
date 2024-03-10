import { faThumbsUp as regularThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as solidThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import { useAuth } from '../../context/authContext';
import { toggleLikedNews } from '../../services/user.service';

export const LikeForum = ({ id }) => {
  const { user, setUser } = useAuth();
  console.log('entro', user);
  const [like, setLike] = useState(!!user.likedNews?.find((item) => item === id));

  const handleLikeClick = async () => {
    if (user) {
      const { token } = user;
      const res = await toggleLikedNews(id);
      const UserUpdate = {
        name: res.data.user.userName,
        email: res.data.user.email,
        image: res.data.user.image,
        check: res.data.user.check,
        _id: res.data.user._id,
        likedCompany: res.data.user.likedCompany,
        likedForum: res.data.user.likedForum,
        likedNews: res.data.user.likedNews,
        token,
      };
      setUser(() => UserUpdate);
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(UserUpdate));
      setLike(!!res.data.user.likedForum.find((item) => item === id));
    }
  };
  return (
    <div className="likebuttonNews">
      {user && (
        <FontAwesomeIcon
          onClick={handleLikeClick}
          icon={like ? solidThumbsUp : regularThumbsUp}
          style={{ color: '#1b52b1' }}
          size="lg"
        />
      )}
    </div>
  );
};
