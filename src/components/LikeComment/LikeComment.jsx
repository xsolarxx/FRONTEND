import { faThumbsUp as regularThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as solidThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { useAuth } from '../../context/authContext';
import { toggleFavComments } from '../../services/user.service';

export const LikeComments = ({ idComment }) => {
  const { user, setUser } = useAuth();
  console.log('entro', user);
  const [like, setLike] = useState(
    !!user?.favComments?.find((item) => item === idComment),
  );

  const handleLikeCommentsClick = async () => {
    if (user) {
      const { token } = user;
      const res = await toggleFavComments(idComment);
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
        usersFollowers: res?.data?.user?.usersFollowers,
        ownerRating: res?.data?.user?.ownerRating,
        companyPunctuated: res?.data?.user?.companyPunctuated,
        token,
      };
      setUser(() => UserUpdate);
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(UserUpdate));
      setLike(!!res?.data?.user?.favComments?.find((item) => item === idComment));
    }
  };
  return (
    <>
      {user && (
        <FontAwesomeIcon
          className="likeButton--blue"
          onClick={handleLikeCommentsClick}
          icon={like ? solidThumbsUp : regularThumbsUp}
          size="lg"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Press to like/dislike!"
          data-tooltip-variant="success"
        />
      )}
      <Tooltip id="my-tooltip" />
    </>
  );
};
