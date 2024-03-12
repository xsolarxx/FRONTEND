import { deleteComment } from '../../services/comment.service';
import { useState } from 'react';
import { useAuth } from '../../context/authContext';

export const CommentDeletion = ({ idComment, onDeleteSuccess }) => {
  const { user, setUser } = useAuth();
  console.log('entro aqui', user);
  const [isCommentDeleted, setIsCommentDeleted] = useState(
    !!user.comments?.find((item) => item === idComment),
  );

  const handleDeleteComment = async () => {
    console.log('soy un comentario', isCommentDeleted);
    try {
      if (user) {
        const { token } = user;
        const res = await deleteComment(idComment);
        console.log('soy una respuesta', res);
        const updatedComments = {
          name: res.data.user.userName,
          email: res.data.user.email,
          image: res.data.user.image,
          check: res.data.user.check,
          _id: res.data.user._id,
          likedCompany: res.data.user.likedCompany,
          comments: res.data.user.comments,
          likedForum: res.data.user.likedForum,
          likedNews: res.data.user.likedNews,
          token,
        };
        setUser(updatedComments);
        localStorage.setItem('user', JSON.stringify(updatedComments));
        setIsCommentDeleted(!!res.data.user.comments.find((item) => item === idComment));
        onDeleteSuccess(); // Llamar a la función de éxito de eliminación
      }
    } catch (error) {
      console.error('Error al eliminar el comentario:', error);
    }
  };

  return (
    <>
      {isCommentDeleted ? (
        <p>El comentario ha sido eliminado.</p>
      ) : (
        <button onClick={handleDeleteComment}>Eliminar comentario</button>
      )}
    </>
  );
};

//! CODIGO UNO
// export const useCommentDeletion = (id) => {
//   const { user, setUser } = useAuth();

//   const [comments, setComments] = useState(!!user.comments?.find((item) => item === id));

//   const handleDeleteComment = async () => {
//     console.log('entro', comments);
//     if (user) {
//       const { token } = user;
//       const res = deleteComment(id);
//       const userUpdate = {
//         name: res.data.user.userName,
//         email: res.data.user.email,
//         image: res.data.user.image,
//         check: res.data.user.check,
//         _id: res.data.user._id,
//         comments: res.data.user.comments,
//         likedCompany: res.data.user.likedCompany,
//         likedForum: res.data.user.likedForum,
//         likedNews: res.data.user.likedNews,
//         token,
//       };
//       setUser(() => userUpdate);
//       localStorage.removeItem('user');
//       localStorage.setItem('user', JSON.stringify(userUpdate));
//       setComments(!!res.data.user.comments.find((item) => item === id));
//     }
//   };
//   return (
//     <div className="likebuttonCompany">
//       {user && <button onClick={handleDeleteComment}>Delete</button>}
//     </div>
//   );
// };

//! CODIGO DOS
// initialComments es un array de comentarios inicial
// handleDeleteComment, que é chamada para excluir um comentário recebe o commentId
// deleteComment llamos el servicio
//

// export const useCommentDeletion = () => {
//   const [comments, setComments] = useState([]);

//   const handleDeleteComment = async (commentId) => {
//     try {
//       await deleteComment(commentId);
//       setComments((prevComments) =>
//         prevComments.filter((comment) => comment._id !== commentId),
//       );
//     } catch (error) {
//       console.error('Error al eliminar el comentario:', error);
//     }
//   };

//   return {
//     comments,
//     deleteComment: handleDeleteComment,
//   };
// };
