import '../Forum/ForumDetail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Comments } from '../../components/Comments/Comments';
import { NewsDetailCard } from '../../components/News/NewsDetailCard';
import { useAuth } from '../../context/authContext';
import { useCommentError } from '../../hooks';
import { createComment, getByRecipient } from '../../services/comment.service';
import { getById } from '../../services/news.service';
import { CommentDeletion } from '../../components/CommentDeletion/CommentDeletion';
import { LikeComments } from '../../components/LikeComment/LikeComment';
import { DeletePageNews } from '../../components';
// import { DeletePageNews } from '../../components/DeletePages/DeletePageNews';

export const NewsDetail = () => {
  const { id } = useParams();
  const { user, setUser } = useAuth();
  const [fullNews, setFullNews] = useState();
  const [send, setSend] = useState(false);
  const [resComment, setResComment] = useState({});
  const [contentValue, setContentValue] = useState('');
  const [comments, setComments] = useState([]);
  const [updateComments, setUpdateComments] = useState(false);

  useEffect(() => {
    const storedUSer = localStorage.getItem('user');
    if (storedUSer) {
      setUser(JSON.parse(storedUSer));
    }
  }, [setUser]);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const fetchFullNews = async () => {
    setFullNews(await getById(id));
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
    setComments(await getByRecipient('News', id));
  };
  useEffect(() => {
    fetchFullNews();
  }, [updateComments]); //Para que aparezcan los comments directamente sin tener que recargar la pág.
  useEffect(() => {
    console.log('updateComments', updateComments);
    //Para el manejo de errores
    useCommentError(resComment, setResComment, setUpdateComments, user, setUser);
  }, [resComment, updateComments]);
  useEffect(() => {
    if (fullNews != null) {
      getComments();
    }
  }, [fullNews]);
  return (
    <div className="ForumDetail-comment-container">
      {fullNews?.data && <NewsDetailCard newsData={fullNews.data} />}
      <section className="commentSection">
        <div className="Leave-a-comment">
          <img className="icon" src={user.image} alt={user.user} />
          <input
            type="text"
            id="content"
            value={contentValue}
            name="content"
            placeholder="Leave a comment ..."
            onChange={(e) => setContentValue(e.target.value)}
          />
          <button
            type="submit"
            disabled={send}
            onClick={() => handleComment()}
            className="material-symbols-outlined"
          >
            <span>add</span>
          </button>
        </div>
        <div className="comments-box">
          {comments &&
            comments?.data?.map((singleComment) => (
              <div className="comments-section-comment" key={singleComment?._id}>
                <Comments comment={singleComment} setCommentsByChild={setComments} />
                <div>
                  <div className="comments-icons">
                    {singleComment.owner._id === user._id && (
                      <CommentDeletion
                        idComment={singleComment._id}
                        setUpdateComments={setUpdateComments}
                      />
                    )}
                    <LikeComments
                      className="LikeIcon--green"
                      idComment={singleComment._id}
                    />
                  </div>
                  <DeletePageNews id={singleComment._id} />
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};
