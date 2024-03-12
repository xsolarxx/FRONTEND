import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Comments } from '../../components/Comments/Comments';
import { NewsDetailCard } from '../../components/News/NewsDetailCard';
import { useAuth } from '../../context/authContext';
import { useCommentError } from '../../hooks';
import { createComment, getByRecipient } from '../../services/comment.service';
import { getById } from '../../services/news.service';
import { toggleFavComments } from '../../services/user.service';
import { CommentDeletion } from '../../components/CommentDeletion/CommentDeletion';

export const NewsDetail = () => {
  const { id } = useParams();
  const { user, setUser } = useAuth();
  console.log('entro likes', user);
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
  const handleLikeComment = async (commentId) => {
    try {
      const isLiked = user.favComments.includes(commentId);
      const updatedUser = {
        ...user,
        favComments: isLiked
          ? user.favComments.filter((id) => id !== commentId)
          : [...user.favComments, commentId],
      };
      setUser(updatedUser);

      await toggleFavComments(commentId);

      const updatedComments = await getByRecipient('News', id);
      setComments(updatedComments);
    } catch (error) {
      console.error('Error liking comment:', error);
    }
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
    useCommentError(resComment, setResComment, setUpdateComments);
  }, [resComment, updateComments]);
  useEffect(() => {
    if (fullNews != null) {
      getComments();
    }
  }, [fullNews]);
  return (
    <>
      <div>{fullNews?.data && <NewsDetailCard newsData={fullNews.data} />}</div>
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
                <Comments
                  comment={singleComment}
                  setCommentsByChild={setComments}
                  handleLikeComment={handleLikeComment}
                />
                <button onClick={() => handleLikeComment(singleComment._id)}>Like</button>
                <CommentDeletion
                  idComment={singleComment._id}
                  setUpdateComments={setUpdateComments}
                />
              </div>
            ))}
        </div>
      </section>
    </>
  );
};
