import React from 'react';
import { useCommentDeletion } from '../../hooks/useCommentDeletion'; // Importa la función correctamente

export const Comments = ({ comment }) => {
  const creationDate = new Date(comment.createdAt);
  const formattedDate = creationDate.toLocaleString('es-ES', {
    timeZone: 'Europe/Madrid',
  });

  // Llama al hook useCommentDeletion para obtener la función deleteComment
  const { deleteComment } = useCommentDeletion();

  return (
    <>
      <div className="commentOwnerContainer">
        <h5>{comment.owner.userName}</h5>
        <p>{formattedDate}</p>
        <p>{comment.title}</p>
        <p>{comment.content}</p>
        <button onClick={() => deleteComment(comment._id)}>Eliminar Comentario</button>
      </div>
    </>
  );
};
