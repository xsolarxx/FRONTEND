import { deleteComment } from '../../services/comment.service';
import { useAuth } from '../../context/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './CommentDeletion.css';
import { Tooltip } from 'react-tooltip';
export const CommentDeletion = ({ idComment, setUpdateComments }) => {
  const { user, setUser } = useAuth();

  const handleDeleteComment = async () => {
    try {
      if (user) {
        const { token } = user;
        const res = await deleteComment(idComment);
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
          usersFollowed: res?.data?.user?.usersFollowed,
          usersFollowers: res?.data?.user?.usersFollowers,
          ownerRating: res?.data?.user?.ownerRating,
          companyPunctuated: res?.data?.user?.companyPunctuated,
          token,
        };
        setUser(updatedComments);
        localStorage.setItem('user', JSON.stringify(updatedComments));
        setUpdateComments((pre) => !pre);
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  // Verificar si el comentario pertenece al usuario actual
  /*const isCurrentUserComment = user && user.comments && user.comments.includes(idComment);*/

  return (
    <>
      <FontAwesomeIcon
        className="delete-container"
        onClick={handleDeleteComment}
        icon={faTrash}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Delete comment"
        data-tooltip-variant="success"
      />
      <Tooltip id="my-tooltip" />
    </>
  );
};
