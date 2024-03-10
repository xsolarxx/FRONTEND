import './CompanyPage.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useCommentError } from '../../hooks';
import { useAuth } from '../../context/authContext';
import { Comments } from '../../components/Comments/Comments';
import { CompanyDetailCard } from '../../components/Cards/ComapanyDetailCard';
import { getByIdCompany } from '../../services/company.service';
import { createComment, getByRecipient } from '../../services/comment.service';

export const CompanyDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [fullCompany, setfullCompany] = useState(); // estado de la cia
  const [send, setSend] = useState(false);
  const [resComment, setResComment] = useState({});
  const [contentValue, setContentValue] = useState('');
  const [comments, setComments] = useState([]);
  const [updateComments, setUpdateComments] = useState(false);

  const fetchFullCompanies = async () => {
    setfullCompany(await getByIdCompany(id));
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

  useEffect(() => {
    fetchFullCompanies();
  }, [updateComments]); //Para que aparezcan los comments directamente sin tener que recargar la pág.
  //*antes de hacer el mapeo tenemos que ver si la longitd de la mapa es mayor que 0
  //* si no se va a rompero elmapeo , si es mayor que 0 pintamos las compañias
  //* Si es menor que 0 --> sin compañias que mostrar

  //* Verifica sí la lista tienes los itens para mapear
  useEffect(() => {
    console.log('updateComments', updateComments);
    //Para el manejo de errores
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
        <div className="allComments">
          {comments &&
            comments?.data?.map((singleComment) => (
              <div key={singleComment?._id}>
                <Comments comment={singleComment} setCommentsByChild={setComments} />
              </div>
            ))}
        </div>
      </section>
    </>
  );
};
