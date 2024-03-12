import { useAuth } from '../context/authContext';
import { deleteComment } from '../services/comment.service';
import { useState } from 'react';

// initialComments es un array de comentarios inicial
// handleDeleteComment, que é chamada para excluir um comentário recebe o commentId
// deleteComment llamos el servicio
//
export const useCommentDeletion = () => {
  const { user } = useAuth;
  console.log('sou user', user);
  const [comments, setComments] = useState([]);
  console.log('entrooo', comments);

  const handleDeleteComment = async (commentId) => {
    try {
      await deleteComment(commentId);
      const updatedComments = comments.filter((comment) => comment._id !== commentId);
      setComments(updatedComments); // Aquí debes establecer el nuevo conjunto de comentarios
    } catch (error) {
      console.error('Error al eliminar el comentario:', error);
    }
  };

  return {
    comments,
    deleteComment: handleDeleteComment,
  };
};
