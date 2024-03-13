import './LikeButton.css';

import { faThumbsUp as regularThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as solidThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import { useAuth } from '../../context/authContext';
import { toggleLikedForum } from '../../services/user.service';

export const LikeForum = ({ id }) => {
  const { user, setUser } = useAuth();
  console.log('entro', user);
  const [like, setLike] = useState(!!user?.likedForum?.find((item) => item === id));

  const handleLikeClick = async () => {
    if (user) {
      const { token } = user;
      const res = await toggleLikedForum(id);
      const UserUpdate = {
        name: res?.data?.user?.userName,
        email: res?.data?.user?.email,
        image: res?.data?.user?.image,
        check: res?.data?.user?.check,
        _id: res?.data?.user?._id,
        likedCompany: res?.data?.user?.likedCompany,
        comments: res?.data?.user?.comments,
        favComments: res?.data?.user?.favComments,
        likedForum: res?.data?.user?.likedForum,
        likedNews: res?.data?.user?.likedNews,
        forumOwner: res?.data?.user?.forumOwner,
        forumFollowing: res?.data?.user?.forumFollowing,
        usersFollowed: res?.data?.user?.usersFollowed,
        token,
      };
      setUser(() => UserUpdate);
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(UserUpdate));
      setLike(!!res?.data?.user?.likedForum?.find((item) => item === id));
    }
  };
  return (
    <div className="likebuttonForum">
      {user && (
        <FontAwesomeIcon
          onClick={handleLikeClick}
          icon={like ? solidThumbsUp : regularThumbsUp}
          style={{ color: '#122e3d' }}
          size="lg"
        />
      )}
    </div>
  );
};
