import { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { toggleFollowedForum } from '../../services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';

export const FollowForumButton = ({ id }) => {
  const { user, setUser } = useAuth();
  const [follow, setFollow] = useState(
    !!user.forumFollowing?.find((item) => item === id),
  );

  const handleFollowClick = async () => {
    if (user) {
      const { token } = user;
      const res = await toggleFollowedForum(id);
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
      setFollow(!!res.data.user.forumFollowing.find((item) => item === id));
    }
  };

  return (
    <div className="followForumButton">
      {user && (
        <FontAwesomeIcon
          onClick={handleFollowClick}
          icon={follow ? solidBookmark : regularBookmark}
          style={{ color: '#122e3d' }}
          size="lg"
        />
      )}
    </div>
  );
};
