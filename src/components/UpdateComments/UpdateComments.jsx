import { update } from '../../services/comment.service';
import { useAuth } from '../../context/authContext';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export const UpdateComment = ({ id }) => {
  const { user, setUser } = useAuth();
  const [updatedContent, setUpdatedContent] = useState('');

  const handleUpdateComment = async () => {
    try {
      if (user) {
        const { token } = user;
        const res = await update(id);
        console.log('soy una respuesta', res);
        const updatedComments = {
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
          token,
        };
        setUser(updatedComments);
        localStorage.setItem('user', JSON.stringify(updatedComments));
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const handleChange = (e) => {
    setUpdatedContent(e.target.value); // Actualiza el estado del contenido del comentario
  };

  return (
    <div>
      <textarea value={updatedContent} onChange={handleChange} />
      <button onClick={handleUpdateComment}>
        <FontAwesomeIcon icon={faPenToSquare} style={{ color: '#2A5C45' }} />
      </button>
    </div>
  );
};
