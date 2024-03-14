import { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { deleteNews } from '../../services/news.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const DeletePageNews = ({ id }) => {
  const { user, setUser } = useAuth();

  const handleDeletPageNewsClick = async () => {
    console.log('entro delele', id);
    if (user && user.role === 'admin') {
      const { token } = user;
      const res = await deleteNews(id);
      console.log('resssssssss', res);
      const userUpdate = {
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
        ownerRating: res?.data?.user?.ownerRating,
        companyPunctuated: res?.data?.user?.companyPunctuated,
        token,
      };
      setUser(() => userUpdate);
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(userUpdate));
    }
  };

  return (
    <div className="deletePageNews">
      {user && user.role === 'admin' && (
        <FontAwesomeIcon
          className="delete-container"
          onClick={handleDeletPageNewsClick}
          icon={faTrash}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Delete comment"
          data-tooltip-variant="success"
        />
      )}
    </div>
  );
};
