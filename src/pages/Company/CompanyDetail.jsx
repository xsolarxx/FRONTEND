import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { useCommentError } from '../../hooks';

import { Comments } from '../../components/Comments/Comments';
import { CompanyDetailCard } from '../../components/Cards/ComapanyDetailCard';
import { getByIdCompany } from '../../services/company.service';
import { createComment, getByRecipient } from '../../services/comment.service';
import { toggleFavComments } from '../../services/user.service';
import { useCommentDeletion } from '../../hooks/useCommentDeletion';

export const CompanyDetail = () => {
  const { id } = useParams();
  const { user, setUser } = useAuth();
  console.log('Entro likesComent', user);
  const [fullCompany, setFullCompany] = useState();
  const [send, setSend] = useState(false);
  const [resComment, setResComment] = useState({});
  const [contentValue, setContentValue] = useState('');
  const [comments, setComments] = useState([]);
  const [updateComments, setUpdateComments] = useState(false);
  // Elimina la desestructuración de comments desde useCommentDeletion
  const { deleteComment } = useCommentDeletion(); // Usa el hook para manejar los comentarios

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const fetchFullCompanies = async () => {
    setFullCompany(await getByIdCompany(id));
  };

  const handleComment = async () => {
    const customFormData = {
      owner: user,
      content: contentValue,
    };
    setSend(true);
    setResComment(await createComment(id, customFormData));
    setContentValue('');
    setSend(false);
  };

  const getComments = async () => {
    setComments(await getByRecipient('Company', id));
  };

  const handleLikeComment = async (commentId) => {
    try {
      await toggleFavComments(commentId);

      const updatedComments = await getByRecipient('Company', id);
      setComments(updatedComments);

      // Actualizar el estado del usuario con el nuevo comentario favorito
      const updatedUser = { ...user, favComments: [...user.favComments, commentId] };
      setUser(updatedUser);
    } catch (error) {
      console.error('Error liking comment:', error);
    }
  };

  useEffect(() => {
    fetchFullCompanies();
  }, [updateComments]);

  useEffect(() => {
    useCommentError(resComment, setResComment, setUpdateComments);
  }, [resComment, updateComments]);

  useEffect(() => {
    if (fullCompany != null) {
      getComments();
    }
  }, [fullCompany]);

  return (
    <>
      <div>{fullCompany?.data && <CompanyDetailCard company={fullCompany.data} />}</div>
      <section className="commentSection">
        <h6>Leave a comment</h6>
        <div className="addComment">
          <input
            className="input_user"
            type="text"
            id="content"
            value={contentValue}
            name="content"
            placeholder="comment content"
            onChange={(e) => setContentValue(e.target.value)}
          />
          <button
            className="button--blue"
            type="submit"
            disabled={send}
            onClick={() => handleComment()}
          >
            Add comment
          </button>
        </div>
        {/* Aquí utilizamos el componente Comments para mostrar los comentarios */}
        {comments &&
          comments?.data?.map((singleComment) => (
            <div key={singleComment?._id}>
              <p>{singleComment.content}</p>
              {user && user._id === singleComment.owner._id && (
                <>
                  <button onClick={() => handleLikeComment(singleComment._id)}>
                    Like
                  </button>
                  <button onClick={() => deleteComment(singleComment._id)}>Delete</button>
                </>
              )}
              {singleComment.createdAt && <p>Created at: {singleComment.createdAt}</p>}
            </div>
          ))}
      </section>
    </>
  );
};
