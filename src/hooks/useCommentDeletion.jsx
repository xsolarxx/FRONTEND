import { deleteComment } from '../services/comment.service';
import { useState } from 'react';

// initialComments es un array de comentarios inicial
// handleDeleteComment, que é chamada para excluir um comentário recebe o commentId
// deleteComment llamos el servicio
//
export const useCommentDeletion = (initialComments) => {
  const [comments, setComments] = useState(initialComments);
  console.log('entrooo', comments);

  const handleDeleteComment = async (commentId) => {
    try {
      await deleteComment(commentId);
      const updatedComments = comments.filter((comment) => comment._id !== commentId);
      setComments(updatedComments);
    } catch (error) {
      console.error('Error al eliminar el comentario:', error);
    }
  };

  return {
    comments,
    deleteComment: handleDeleteComment,
  };
};
