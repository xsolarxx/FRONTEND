import { deleteComment } from '../../services/comment.service';
import { useAuth } from '../../context/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const CommentDeletion = ({ idComment, onDeleteSuccess, setUpdateComments }) => {
  const { user, setUser } = useAuth();
  console.log('entro aqui user delete', user);

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
          token,
        };
        setUser(updatedComments);
        localStorage.setItem('user', JSON.stringify(updatedComments));
        setUpdateComments((pre) => !pre);
        onDeleteSuccess(); // Llamar a la función de éxito de eliminación
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
        onClick={handleDeleteComment}
        icon={faTrash}
        style={{ color: '#2A5C45' }}
      />
    </>
  );
};
